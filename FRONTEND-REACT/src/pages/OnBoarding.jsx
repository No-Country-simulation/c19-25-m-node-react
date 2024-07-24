import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

    return (

        <div className="min-height-vh mx-auto max-w-720 d-flex justify-content-center align-items-center flex-column m-0 p-0">
            <div className="mb-5">
                <img src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg" alt="OnBoardingImage" className="img-fluid" />
            </div>
            <button type="button" className="btn btn-success fs-3" onClick={navigateToLogin}>
                Ingresar
            </button>
        </div>

    )
}