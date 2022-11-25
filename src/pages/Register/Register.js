import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  // const [userRole, setUserRole] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const naviGate = useNavigate();
  const handleRegister = (data) => {
    // console.log(data,userRole);
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user,userRole);
        toast.success("Register Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUserToDatabase(data.name, data.email, data.role)
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };
//save user data to database
const saveUserToDatabase = (name, email, role) =>{
  const user ={name, email, role};
  fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user)
  })
  // console.log(user)
  
  .then(res => res.json())
  .then(data =>{
    getUserToken(email)
      // console.log(data)
      
      
  })
}
const getUserToken = email =>{
  fetch(`http://localhost:5000/jwt?email=${email}`)
  .then(res => res.json())
  .then(data => {
      if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
          // setToken(data.accessToken);
          naviGate("/");
      }
  });
}




  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Register</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Role</span>
            </label>
            <select
              {...register("role")}
              className="select input-bordered w-full max-w-xs"
            >
              <option >Please Select a role</option>
              <option value="user">user</option>
              <option value="seller">seller</option>
            </select>
          </div>

          <input className="btn  w-full mt-4" value="Register" type="submit" />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-[#008374]" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Register;
