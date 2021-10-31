import React from 'react';
import { useHistory } from 'react-router-dom';

const ServiceDetail = (props) => {
const { key, img, name, price } = props.service || {}


const history= useHistory()

  const handleDetails=(key)=>{
      const uri= `/details/${key}`
      history.push(uri)
  }
    return (
        <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card card-inverse card-info">
                    <img class="card-img-top" src={img} alt="11"/>
                    <div class="card-block">
                        
                        <h4 class="card-title">{name}</h4>
                        <div class="card-text">
                            {price}
                        </div>
                    </div>
                    <div class="card-footer text-center">
                        <button onClick={()=>handleDetails(key)} class="btn btn-info btn-sm">Details</button>
                    </div>
                </div>
            </div>
    );
};

export default ServiceDetail;