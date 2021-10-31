import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import './Booking.css'




const Booking = () => {
    let {id} = useParams();
    const {user} = useAuth();
    const [service, setService] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://creepy-chupacabra-59453.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
       
    })


    // const [details, setDetails] = useState([])
    // const [singleCar, setSingleCar] = useState([])
    // useEffect(() => {
    //     fetch('/amir.json')
    //         .then(res => res.json())
    //         .then(data => setDetails(data));
           
            
    // }, [])


    // useEffect(() => {
    //     const foundDetails = details.find(
    //         (car)=> car.id == id)
   
    //         setSingleCar(foundDetails)
    // }, [details])
    // console.log(singleCar)
  
   const handleAddtocart= () => {
        service.email = user.email
        console.log(service)

        fetch("https://creepy-chupacabra-59453.herokuapp.com/addOrder", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(service)
        });
        // window.location.reload(false)
        alert('go to my orders to place your order')
   };

   const onSubmit = (data) => {
       console.log(data)
       alert('your information has been recorded')
       
   }

   
    return (
        <div>
            <h5>Logged in as: {user?.displayName}</h5>
            <h5>email address: {user?.email}</h5>
            <div className="add-service">
            <h2>Please put your information before proceeding to order</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 200 })} placeholder="Name" />
                <input defaultValue={user.email} {...register("email", { required: true, maxLength: 200 })} placeholder="email" />
                <textarea {...register("description")} placeholder="your address" />
                
               
                <input type="submit" />
            </form>
            </div>
           

            <div>
                <img src={service?.img} alt="" className="my-5 short" style={{ width: "500px" }}/>
                <div className="p-5">
                {/* <h2> service no: {id}</h2> */}
                <h2>service name: {service?.name}</h2>
                <h5>{service?.description}</h5>
                {/* <p>details are: {singleCar}</p> */}
                <button onClick={handleAddtocart}>buy this item</button>
                </div>
            </div>


            <Footer></Footer>

        </div>
    );
};

export default Booking;