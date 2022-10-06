import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './UserPost.css'
import { Link } from 'react-router-dom';


const UserPost = (props) => {
    const {title,body,id}= props.data;
    
    return (
        <div>
            <Container fixed className='post-container'>
            <h4>Title: {title} </h4>
            <p>Post: {body}</p>
            <Link to={`/post/${id}`}><Button variant="contained">See Comment</Button></Link>
            
            </Container>
            

        </div>
    );
};

export default UserPost;