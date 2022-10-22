import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../../Shared/NewsCart/NewsCart';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>All news are : {allNews.length}</h2>
            {
                allNews.map(news => <NewsCart key={news._id} news={news}></NewsCart>)
            }
        </div>
    );
};

export default Home;