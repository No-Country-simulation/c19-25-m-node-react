import React from "react";
import { useNavigate } from 'react-router-dom';
// import imgOnboarding 

export default function Onboarding() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

    return (

        <div className="min-height-vh mx-auto max-w-720 d-flex justify-content-center align-items-center flex-column m-0 p-0">
            <div className="mb-5">
                <img src="https://i.imgur.com/PjWTrbb.png" alt="OnBoardingImage" className="img-fluid" />
            </div>
            <button type="button" className="btn btn-success fs-3" onClick={navigateToLogin}>
                Ingresar
            </button>
        </div>

    )
}