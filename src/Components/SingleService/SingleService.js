import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const SingleService = () => {

    const {id}=useParams()
    const [details,setDetails]= useState([])
    const [specificDetail,setSpecificDetail] = useState({})
   
   
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
                    <div class="card-footer text-center">
                        <button class="btn btn-info btn-sm">Book Order</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleService;