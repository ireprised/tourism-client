import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddOrder.css'

const AddOrder = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data);
      axios.post('http://localhost:5000/services',data)
      .then(res=>{
        if(res.data.insertedId){
          alert('Successfully added')
        }
        reset(res); 
      })
      
  };

    return (
    <div className="add-service">
      <form onSubmit={handleSubmit(onSubmit)} >
        <input {...register("name")} placeholder="name" />
        <input {...register("email")} placeholder="email" />
        <textarea {...register("description")} placeholder="Tour Event Description" />
        <input {...register("img")} placeholder="image url" />
        <input type="number" {...register("price")} placeholder="price"/>
        <input type="submit" />
     </form>
        </div>
    );
};

export default AddOrder;