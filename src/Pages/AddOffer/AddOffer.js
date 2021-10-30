import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddOffer.css';

const AddOffer = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/offers', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully add data');
                    reset();
                }
            })
    };
    return (
        <div className="mt-5 mb-5 add-offer form">
            <h2>Please Add a offer </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="offer name" />
                <textarea {...register("description")} placeholder="offer description" />
                <input type="number" {...register("price")} placeholder="offer price" />
                <input  {...register("person")} placeholder="number of person like 2-3" />
                <input {...register("img")} placeholder="img uri" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddOffer;