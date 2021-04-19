import React from 'react';
// Fetch data from the global redux store
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

// Import the single post component
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    // It's called state.posts, check the index.js reducers
    const posts = useSelector((state) => state.posts)

    // console.log(posts);
    return (
        // If there are no posts, return a loading icon
        // If there are posts, display grid
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} md={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}

            </Grid>
        )
    );
}

export default Posts;
