import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import { TokenContext } from "./Providers/TokenContext";
import Confetti from "react-confetti";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const FormRegistro2 = () => {
  const context = useContext(TokenContext);

  const [switches, setSwitches] = useState([
    {
      question: "¿Tienes experiencia previa cuidando mascotas?",
      isChecked: false,
    },
    {
      question:
        "¿Eres consciente de que al publicar un anuncio con perros, gatos, pájaros o peces, estás declarando tu compromiso de cuidar de estas mascotas?",
      isChecked: false,
    },
    {
      question:
        "¿Estás de acuerdo en que al establecer un horario como cuidador, estarás comprometido/a a cuidar mascotas a tiempo completo durante ese lapso de tiempo?",
      isChecked: false,
    },
    {
      question: "¿Cuentas con referencias de dueños anteriores?",
      isChecked: false,
    },
    {
      question:
        "¿Has recibido formación relacionada con el cuidado de animales?",
      isChecked: false,
    },
    {
      question: "¿Cuentas con seguro de responsabilidad civil?",
      isChecked: false,
    },
    {
      question:
        "¿Estás disponible para realizar visitas domiciliarias previas, en caso necesario?",
      isChecked: false,
    },
    {
      question:
        "¿Comprendes que al publicar un anuncio, estás aceptando un contrato de prestación de servicios como cuidador para el tipo de mascotas que seleccionaste?",
      isChecked: false,
    },
    {
      question: "¿Tienes conocimientos en primeros auxilios para mascotas?",
      isChecked: false,
    },
    {
      question:
        "¿Estás dispuesto a proporcionar informes fidedignos sobre el estado de las mascotas a los propietarios, si es necesario?",
      isChecked: false,
    },
    {
      question:
        "¿Estás dispuesto a seguir las instrucciones específicas de cuidado proporcionadas por los propietarios de las mascotas?",
      isChecked: false,
    },
  ]);

  const [mostrarModalEnvio, setMostrarModalEnvio] = useState(false);
  const [modalConfirmar, setModalConfirmar] = useState(false);
  const [errorForm2, setErrorForm2] = useState("");

  const navigate = useNavigate();

  const returnToPerfil = () => {
    navigate("/perfil", { state: { scrollToTop: true } });
};

  const handleSwitchChange = (index) => (event) => {
    const newSwitches = [...switches];
    newSwitches[index].isChecked = event.target.checked;
    setSwitches(newSwitches);
  };

  const showModalEnvio = () => {
    setMostrarModalEnvio(true);
  };

  const handleConfirmar = () => {
    setModalConfirmar(true);
    saveToDatabase();
  };

  const [showCongratulations, setShowCongratulations] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const saveToDatabase = async () => {
    const allYes = switches.every(
      (switchItem) => switchItem.isChecked === true
    );

    if (allYes) {
      if (modalConfirmar) {
        try {
          const userId = context.dataUsuario._id;

          const response = await axios.put(
            `${backendUrl}/usuario/cuidador/${userId}`,
            { cuidador: true },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          console.log("Datos enviados correctamente", response.data);
          context.setDataUsuario(response.data.usuario);
          setMostrarModalEnvio(false)
          setShowCongratulations(true);
        } catch (error) {
          setErrorForm2(error.message);
          console.error("Error al enviar los datos:", error);
        }
      }
    } else {
      alert('Por favor, responde todas las preguntas con "Sí" para enviar.');
    }
  };

  const handleContinue = () => {
    setShowCongratulations(false);
    returnToPerfil();
  };

  let buttonOrMessage;
  if (switches.every((switchItem) => switchItem.isChecked)) {
    buttonOrMessage = (
      <button
        className="btn btn-success mt-3 fs-4 mb-4"
        onClick={showModalEnvio}
      >
        Enviar
      </button>
    );
  } else {
    buttonOrMessage = (
      <div className="alert alert-warning mt-3">
        Por favor, responde todas las preguntas con "Sí" para enviar.
      </div>
    );
  }

  return (
    <>
      <div className="mx-3 container min-height-vh my-3">
        <div>
          <h2 className="my-4">
            Para poder publicar un anuncio necesitamos que respondas seriamente
            a estas preguntas:
          </h2>
        </div>
        <div className="border rounded px-3">
          {switches.map((item, index) => (
            <div key={index} className="my-3 fs-5">
              <span>{item.question}:</span>
              <div className="form-check form-switch mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id={`flexSwitchCheckDefault${index}`}
                  checked={item.isChecked}
                  onChange={handleSwitchChange(index)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`flexSwitchCheckDefault${index}`}
                >
                  {item.isChecked ? "Sí" : "No"}
                </label>
              </div>
              <hr className="mx-auto text-dark" />
            </div>
          ))}
        </div>
        {buttonOrMessage}
      </div>

      {mostrarModalEnvio && (
        <ModalComponent
          classNameModal="modal fade"
          idModal="modalConfirmacionEnvioForm2"
          tittleModal="¿Seguro que has leido todo bien?"
          bodyModal="El envío de este registro puede acarrear futuras consecuencias legales. Te rogamos que leas bien todas las preguntas."
          classNameBotonCerrar="btn btn-outline-danger"
          botonCerrar="Cerrar"
          classNameBotonEnviar="btn btn-outline-success"
          onClickEnviar={handleConfirmar}
          botonEnviar="Enviar Formulario"
        />
      )}

      {showCongratulations && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050, backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <Confetti
            width={windowDimensions.width}
            height={windowDimensions.height}
          />
          <div className="bg-white p-5 rounded text-center">
            <h2>¡Enhorabuena!</h2>
            <p className="fs-4">Ya eres cuidador</p>
            <button className="btn btn-primary mt-3" onClick={handleContinue}>
              Continuar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormRegistro2;
