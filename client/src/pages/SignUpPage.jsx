import React, { useState } from "react";
import "../styles/SignUpPage.scss";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const {name, value, files} = e.target
    setFormData({...formData,
        [name] : value,
        [name] : name === "profileImage" ? files[0] : value
    })
  }


  console.log(formData);

  return (
    <div className="signup">
      <div className="signup_content">
        <form className="signup_content_form">
          <input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email ID"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}
            required
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile pic" />
            <p style={{ fontFamily: "nunito" }}>Upload your profile photo</p>
          </label>

          {formData.profileImage && (
            <img src={URL.createObjectURL(formData.profileImage)}
            alt="profile pic"
            style={{maxWidth:"80px"}}
            />
          )}
          <button type="submit">SIGN UP</button>
        </form>
        <a href="/login" style={{ fontFamily: "nunito" }}>
          Already have an account? Log in by clicking here
        </a>
      </div>
    </div>
  );
};

export default SignUpPage;
