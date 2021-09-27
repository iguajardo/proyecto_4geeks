import React from 'react';



const Register = () => {
    return (
        <>
            <div className="container d-flex py-5 justify-content-center">
                <div className="card ">
                    <div className="card-header">
                        <h3>Bienvenido a Serenity</h3>
                    </div>
                    <div className="card-body">
                        <form className="row g-3">
                            <div className="col-sm-12 col-md-12">
                                <label htmlFor="email" className="form-label fw-bold">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="example@"
                                />
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <label htmlFor="password" className="form-label fw-bold">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputFirstname" className="form-label fw-bold">
                                    First Name
                                </label>
                                <input type="text" className="form-control" id="inputFirstname" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputLastname" className="form-label fw-bold">
                                    Last Name
                                </label>
                                <input type="text" className="form-control" id="inputLastname" />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className="btn btn-primary fw-bold" type="button">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;