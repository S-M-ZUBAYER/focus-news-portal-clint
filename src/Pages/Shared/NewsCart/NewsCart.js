import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Image } from 'react-bootstrap';

const NewsCart = ({ news }) => {
    const { _id, title, author, total_view, details, image_url, rating } = news;
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <Image roundedCircle className=" me-2" style={{ height: '60px' }} src={author?.img}></Image>
                        <div>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Title className="text-center">{title}</Card.Title>
                    <Card.Text>
                        {details.length > 250 ?
                            <>{details.slice(0, 250) + "..."}<Link to={`/news/${_id}`}>Read More</Link> </> :
                            <>{details}</>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div className='flex align-items-center'>
                        <FaStar className='text-warning me-2'></FaStar>
                        <small>{rating.number}</small>
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye>
                        <small>{total_view}</small>
                    </div>
                </Card.Footer>
            </Card>
        </div >
    );
};

export default NewsCart;