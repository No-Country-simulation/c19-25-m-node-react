

export default function () {

  return (
    <>
      <div className="min-height-vh d-flex justify-content-center align-items-start mx-4 flex-column">
        <div className="mb-4">
          <h1>Crear anuncio:</h1>
        </div>
    
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Diego</h5>
                <p className="card-text">Disponible para cuidados barrio Palermo</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ana</h5>
                <p className="card-text">Disponible para cuidado de gatitos segunda semana de julio</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Juan</h5>
                <p className="card-text">Disponible para cuidado de perros todas las razas y pasos por la plaza</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}