import "../css/Signup.css";

import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { signup } from "../features/userSlice";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const imageFile = watch("photo");
  const [previewUrl, setPreviewUrl] = useState("");
  const navigate = useNavigate();

  // Update the previewUrl when the imageFile changes
  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(imageFile[0]);
    } else {
      setPreviewUrl("");
    }
  }, [imageFile]);

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      return "The password and confirm password values provided by the user do not match.";
    }
    try {
      const formData = new FormData();
      formData.append("photo", data.photo[0]);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("role", data.role);
      dispatch(signup(formData));
      navigate("/courses");
      setPreviewUrl("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <p className="form-title">Sign up </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name")}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email")}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            {...register("password")}
            id="password"
            name="password"
            minLength={6}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            {...register("confirmPassword")}
            minLength={6}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" {...register("role")} required>
            <option value="" disabled>
              Select Role
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="photo">Upload Photo:</label>
          <input type="file" id="photo" name="photo" {...register("photo")} />
        </div>
        <div className="form-group preview-container">
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              style={{ width: "200px", height: "auto" }}
            />
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
      <Outlet />
    </div>
  );
};

export default Signup;
