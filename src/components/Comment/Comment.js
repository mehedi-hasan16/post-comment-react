import React from 'react';
import Container from '@mui/material/Container';
import './Comment.css'

import './Comment.css'

const Comment = (props) => {

    const {body, email}= props.comment;

    return (

        <Container fixed className='comment-container'>
            <h4>Email: {email}</h4>
            <p>Comment: {body}</p>
            </Container>
           
    );
};

export default Comment;