import React, { useState } from 'react';



const Register = () => {

    const [input, setInput] = useState({
        username: "",
        password: "",
        email: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://serenity-rest-api.herokuapp.com/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        })
            .then((response) => response.json())
            .then((data) =>  console.log(data) )
            .catch((error) => console.log(error))
    }

    const handleChange = ({ target }) => {
        setInput({
            ...input,
            [target.name]: target.value
        })
    }

    return (
        <>
            <div className="container d-flex py-5 justify-content-center">
                <div className="card ">
                    <div className="card-header">
                        <h3 className="text-center">Bienvenido a Serenity</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="flex-column g-3" >
                            <div className="col-md-12">
                                <label htmlFor="inputUsername" className="form-label fw-bold">
                                    Username
                                </label>
                                <input type="text" className="form-control" id="inputUsername" name="username" value={input.username} onChange={handleChange} />
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
                                    name="email"
                                    value={input.email}
                                    onChange={handleChange}
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
                                    name="password"
                                    value={input.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-primary fw-bold">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;