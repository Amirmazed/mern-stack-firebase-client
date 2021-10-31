import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';




const Service = ({ service }) => {
    // const {service} = props;
    const {_id, name, price, description, img } = service;
    
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            {/* <p className="px-3">{description}</p> */}
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-warning">Book this service </button>
            </Link>
        </div>
    );
};

export default Service;


    // https://i.ibb.co/9n2D81C/s1.jpg
    // https://i.ibb.co/MnqrkLH/s2.jpg
    // https://i.ibb.co/cXJZWwS/s3.jpg
    // https://i.ibb.co/G32qh8R/s4.jpg
    // https://i.ibb.co/6vXBFB6/s5.jpg
    // https://i.ibb.co/dpkgRkY/s6.jpg