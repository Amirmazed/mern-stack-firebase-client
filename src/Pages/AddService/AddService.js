import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://creepy-chupacabra-59453.herokuapp.com/services', data)
      .then(res=> {
        if(res.data.insertedId) {
          alert('added successfully')
        }
      })
    };
    return (
    <div className="add-service">
        <h1>this is a add service</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("name", { required: true, maxLength: 200 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
    </form>
    </div>
    );
};

export default AddService;