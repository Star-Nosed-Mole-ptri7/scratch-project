// There is package for this that does all of this under the hood: multer-s3
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

const awsController = {};

awsController.upload = async (req, res, next) => {
  try {
    // Destructure filename for the image file
    const { filename, path } = req.file;

    // Read the image that was created by multer (package) from the client's image.
    const fileStream = fs.createReadStream(path);

    // Prepare for upload
    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: filename
    };

    // Upload and save image data from bucket
    const { Location } = await s3.upload(uploadParams).promise(); // Avoid cb function with promisify

    // Delete the file locally (it is on the server now)
    fs.unlink(path, () => {});

    // Save the image path to the locals to be sent back to client in the last middleware function
    res.locals.url = Location;

    // On success: continue to next middleware function
    return next();
  } catch (err) {
    // On error: Handle error with global error handler and respond with a 500 error
    return next({
      log: 'Unable to upload image',
      message: err.message,
      status: 500
    })
  }
}

module.exports = awsController;
