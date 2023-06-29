import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./UpdateForm.css";
import { apiDomain } from "../../utils/utilsDomain";
import { useParams } from "react-router-dom";

import  './UpdateForm.css'

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.string().required("Price is required"),
  location: yup.string().required("Location is required"),
  images: yup.string().required("Images is required"),
  amenities: yup.array().min(1, "Amenities is required").required(),
});

const UpdateForm = () => {
  const [listing, setListing] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')



  const { id } = useParams()

  const fetchListing = async () => {
    const res = await fetch("http://localhost:8083/listings/" + id)
    const data = await res.json()
    setListing(data)
    // return data
  }

  useEffect(() => {
    // fetchListing()
    fetchListing()
  }, [])

  useEffect(() => {
    setTitle(listing.title)
    setDescription(listing.description)
    setPrice(listing.price)
    setLocation(listing.location)

  }, [listing])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // console.log(data);
    const res = await fetch(apiDomain + '/listings/' + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const dataFromServer = await res.json()
    return dataFromServer
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="newlistingform">
      <h1>Property Form</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" {...register("title")} value={title} onChange={(e) => setTitle(e.target.value)} />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" {...register("description")} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" {...register("price")} value={price} onChange={(e) => setPrice(e.target.value)} />
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" {...register("location")} value={location} onChange={(e) => setLocation(e.target.value)} />
        {errors.location && <p>{errors.location.message}</p>}
      </div>
      <div>
        <label htmlFor="images">Images:</label>
        <input type="file" id="images" multiple {...register("images")} />
        {errors.images && <p>{errors.images.message}</p>}
      </div>
      <div>
        <label htmlFor="amenities">Amenities:</label>
        <select id="amenities" {...register("amenities")} multiple>
          <option value="swimming-pool">Swimming Pool</option>
          <option value="gym">Gym</option>
          <option value="parking">Parking</option>
          <option value="balcony">Balcony</option>
        </select>
        {errors.amenities && <p>{errors.amenities.message}</p>}
      </div>
      <button type="submit" className="btn-update" style={{backgroundColor: "royalblue",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer"}}>Update</button>
    </form>
  );
};

export default UpdateForm;
