import React from 'react';



const Register = () => {
    return (
        <>
            <div className="container d-flex py-5 justify-content-center">
                <div className="card ">
                    <div className="card-header">
                        <h3 className="text-center">Bienvenido a Serenity</h3>
                    </div>
                    <div className="card-body">
                        <form className="flex-column g-3">
                            <div className="col-md-12">
                                <label htmlFor="inputUsername" className="form-label fw-bold">
                                    Username
                                </label>
                                <input type="text" className="form-control" id="inputUsername" />
                            </div>
                            <div className="col-sm-12 col-md-12 mt-2">
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
                            <div className="col-sm-12 col-md-12 mt-2">
                                <label htmlFor="password" className="form-label fw-bold">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                />
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