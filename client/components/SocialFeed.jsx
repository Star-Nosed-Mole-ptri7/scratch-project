import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Feed() {

    const [posts, setPosts] = useState([]);

    const paperStyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        verticalAlign: "middle",
        font: "lucida",
        fontColor: '#04a522'
    };

    useEffect(() => {
        fetch('/api/social')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                console.log(data);
            })
            .catch((err) => console.log(err.message));
    }, []);


    const data = [];

    posts.forEach(post => data.push(<Paper sx={paperStyle} elevation={3}>
        <Typography>
            {post.message} <br />
        </Typography>
            {/* <img src={post.imageUrl} /> */}
    </Paper>))

    return (
        <div className='social'>
            <h1>Social Feed</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 380,
                        height: 128,
                    }
                }}
            >
                {data}
            </Box>
        </div>
    );

}