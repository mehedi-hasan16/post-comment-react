import React, { useEffect, useState } from 'react';
import UserPost from '../UserPost/UserPost';

const Home = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        const url ='https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setData(data));
    },[])

   
    return (
        <div>
            {
                data.map(element => <UserPost data={element}> </UserPost>)
            }
        </div>
    );
};

export default Home;