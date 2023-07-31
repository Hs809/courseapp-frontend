import "../css/Signup.css";

import React from "react";

import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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

        <button type="submit">Submit</button>
      </form>
      <Outlet />
    </div>
  );
};

export default Signup;
