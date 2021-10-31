import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // fetch('services.json')
        fetch('https://creepy-chupacabra-59453.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map((service, index) => <Service
                        key={service.id}
                        service={service}
                        index={index}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;