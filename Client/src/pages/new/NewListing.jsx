import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './NewListing.css'

const ListingForm = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    price: yup.string().required("Price is required"),
    location: yup.string().required("Locatin is required"),
    images: yup.string().required("Images is required"),
    amenities: yup.string().required("Amenities is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='newlistingform'>
      <h1>Property Form</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" {...register("title")} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" {...register("description")}></textarea>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price"  {...register("price")} />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"

          {...register("location")}
        />
      </div>
      <div>
        <label htmlFor="images">Images:</label>
        <input type="file" id="images" multiple {...register("images")} />
      </div>
      <div>
        <label htmlFor="amenities">Amenities:</label>
        <select id="amenities" multiple {...register("amenities")}>
          <option value="swimming-pool">Swimming Pool</option>
          <option value="gym">Gym</option>
          <option value="parking">Parking</option>
          <option value="balcony">Balcony</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ListingForm;
