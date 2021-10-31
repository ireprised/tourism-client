import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
const SingleService = () => {

    const {id}=useParams()
    const [details,setDetails]= useState([])
    const [specificDetail,setSpecificDetail] = useState([])
    const {user} =useAuth();  
   
 useEffect(() =>
      fetch("https://blooming-sea-12160.herokuapp.com/services")
      .then(res => res.json())
      .then(data=>setDetails(data))
    ,[])


useEffect(() =>{
    if(details.length>0){
        const matchedData= details.find(detail=> detail.key==id)
        setSpecificDetail(matchedData);
    }
    

}
,[details])
const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data);
      axios.post('http://localhost:5000/order',data)
      .then(res=>{
        if(res.data.insertedId){
          alert('booked added')
        }
        reset(res); 
      })
      
  };


    return (
        <div className="container">
            <div className="row w-25">
            <div class="col-sm-12 col-md-12 col-lg-12 ">
                <div class="card card-inverse card-info">
                    <img class="card-img-top fluid" src={specificDetail?.img} alt="11"/>
                    <div class="card-block">
                        
                        <h4 class="card-title">{specificDetail?.name}</h4>
                        
                        <div class="card-text">
                            <h5>Booking Price:{specificDetail?.price} </h5>
                        </div>
                        <h4> Seat Left: {specificDetail?.stock}</h4>
                        <h2>{specificDetail?.category}</h2>
                        
                    </div>
                    
                </div>
            </div>
            </div>


        <div className="add-service">
                <form onSubmit={handleSubmit(onSubmit)} >
                <input {...register("_id")} defaultValue={specificDetail?._id}/><br/>
                    <input {...register("name")} defaultValue={specificDetail?.name} placeholder={specificDetail?.name}/>
                    <input type="number" {...register("price")} defaultValue={specificDetail.price} />
                    <input {...register("name")} defaultValue={user?.displayName} placeholder={user?.displayName}/>
                    <input {...register("email")} defaultValue={user?.email} />
                    <input {...register("address")} defaultValue="address" />
                    <input type="submit" defaultValue="Place Order" />
                </form>
        </div>
        </div>
    );
};

export default SingleService;