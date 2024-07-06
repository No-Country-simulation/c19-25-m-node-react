export default function Registrar(){

    return (
        <>


                    <div class="card">
                    <h1 class="card-header">Registar</h1>
                    <div class="card-body">
                        
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4"/>
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Direccion</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                            </div>
    
                            <div className="col-md-6">
                                <label for="inputCity" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="col-md-4">
                                <label for="inputState" className="form-label">Provincia</label>
                                <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label for="inputZip" className="form-label">CP</label>
                                <input type="text" className="form-control" id="inputZip"/>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Registrar</button>
                            </div>
                        </form>
                        
                    </div>
                    </div>
           
         
        </>
    )
}