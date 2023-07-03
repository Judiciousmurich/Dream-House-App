import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./NewListing.css";
import { apiDomain } from "../../utils/utilsDomain";




const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.string().required("Price is required"),
  location: yup.string().required("Location is required"),
  images: yup.string().required("Images is required"),
  amenities: yup.array().min(1, "Amenities is required").required(),
});

const ListingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    const res = await fetch(apiDomain + 'listings', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="newlistingform">
      <h1>Property Form</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" {...register("description")}></textarea>
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" {...register("price")} />
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" {...register("location")} />
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default ListingForm;
