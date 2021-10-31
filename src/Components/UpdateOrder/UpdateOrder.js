import React from 'react';
import './UpdateOrder.css'

const UpdateOrder = (props) => {
    const {_id,name,price} = props.booking;
    const handleDelete = id =>{
        const url = `http://localhost:5000/order/${_id}`
        fetch(url,{
            method: 'DELETE'

        })
        .then(res => res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('deleted successfully')
            }
        })
    }
    return (
        <div className="update-order">
            <li>{name}</li><br/><button onClick={()=>handleDelete(_id)}>delete</button>
        </div>
    );
};

export default UpdateOrder;