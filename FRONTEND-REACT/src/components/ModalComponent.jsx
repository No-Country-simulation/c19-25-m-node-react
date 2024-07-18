import React, { useEffect } from 'react';
import { Modal } from 'bootstrap'; // Importa Bootstrap JavaScript

const ModalComponent = (props) => {
  useEffect(() => {
    const modalElement = document.getElementById(props.idModal);
    const modalInstance = new Modal(modalElement);
    modalInstance.show();

    return () => {
      modalInstance.hide();
    };
  }, [props.idModal]);

  return (
    <div className={props.classNameModal} id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${props.idModal}Label`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`${props.idModal}Label`}>{props.tittleModal}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {props.bodyModal}
          </div>
          <div className="modal-footer">
            <button type="button" className={props.classNameBotonCerrar} data-bs-dismiss="modal">{props.botonCerrar}</button>
            <button type="button" className={props.classNameBotonEnviar} onClick={props.onClickEnviar}>{props.botonEnviar}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
