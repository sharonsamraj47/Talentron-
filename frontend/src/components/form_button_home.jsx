import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

const FormButtonHome = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/contact-us", { state: { showForm: true } }); 
    };

    return (
        <a href="#" className="form-button-home" onClick={handleClick}>
            <img src="/images/form.png" alt="Button" />
        </a>
    );
};

export default FormButtonHome;