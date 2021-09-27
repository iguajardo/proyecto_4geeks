import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';


const Navbar = () => {
    // const { store, actions, setStore } = useContext(Context);
    // const { favorites } = store;
    // const { deleteFavorite } = actions;
    // console.log("favoritos", favorites);


    return (
        <>



            <ul className="navbar justify-content-between bg-dark align-content-center">
                <div>
                    <img src={Starwarslogo} className=" logo rounded float-start img-fluid "></img>
                </div>
                <div className="nav ">
                    <li className="nav-item">
                        <Link className="nav-link text-white text-center" aria-current="page" to="/">
                            <FaHome /> <br />
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-center" to="/personajes">
                            <i className="fab fa-jedi-order fs-5"></i> / <i class="fab fa-galactic-republic fs-5"></i><br />
                            Characters
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-center" to="/planetas">
                            <IoPlanet className="fs-5" /><br />
                            Planets
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-center" to="/naves">
                            <GiSpaceship className="fs-5" /> <br />
                            Starships
                        </Link>
                    </li>
                </div>

                <div className="nav align-content-center me-4">

                    <li className="nav-item">
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Favorites<span class="badge bg-secondary">{favorites.length}</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">

                                {favorites.length === 0 ? (
                                    <li className="dropdown-item">
                                        <button className="dropdown-item" type="button">
                                            No Favorites
                                        </button>
                                    </li>
                                ) : (
                                    favorites.map((t, index) => {
                                        return (

                                            <li className="favorites dropdown-item d-flex align-text-center" key={index}>
                                                <Link className="link" to={t.link}><p className="link">{t.name}</p></Link>
                                                <button
                                                    className="boton"
                                                    onClick={() => {
                                                        deleteFavorite(index)


                                                    }}>
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </li>

                                        );
                                    })
                                )}
                            </ul>
                        </div>

                    </li>
                </div>
            </ul>





        </>
    )
}

export default withRouter(Navbar);