
export default function Login (){
    return (
        <>

                <div className="card text-center mb-3">
                <div className="card-body">
                <p class="fs-1">Login</p>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email </label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                        <button type="button" className="btn btn-primary mt-4">Login</button>
                    </div>
                   
                </div>
                </div>

        </>
    )
}