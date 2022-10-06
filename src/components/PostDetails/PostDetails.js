import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const {id}=useParams();
    
    const [comment, setComment]= useState([]);
    useEffect(()=>{
        const url= `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data));
    },[])
    return (
        <div>
            
            {
                comment.map(element=><Comment comment={element}></Comment>)
            }
        </div>
    );
};

export default PostDetails;