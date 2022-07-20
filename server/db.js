const { Pool } = require('pg');

// Create a new pool here using the connection string above
const pool = new Pool({
  connectionString: process.env.PG_URI
});

// Replace $time with the postgres timestamp function
const createTimestamp = (query) => {
  // Create a timestamp leveraging the postgres to_timestamp function
  return query.replace('$time', `to_timestamp(${Date.now()} / 1000.0)`);
}

// This will be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text, 'with params', params || ' ');
    text = createTimestamp(text); // Add timestamp if needed.
    return pool.query(text, params, callback);
  }
};
