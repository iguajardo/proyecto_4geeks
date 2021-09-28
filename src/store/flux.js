const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiUrl: "https://serenity-rest-api.herokuapp.com/",
            token: null
            
        
        },
        actions: {
            loginUser: async (username, password) => {
                const store = getStore();
                const met = {
                    method: "POST",
                    body: JSON.stringify({
                        username,
                        password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                const response = await fetch(`${store.apiUrl}api/auth`, met);
                const data = await response.json();
                console.log(data)
                if (data.access_token) {
                    localStorage.setItem("userToken", data.access_token);
                    setStore({ token: data.access_token });
                }
                console.log(response)
                return response;
            }
        
        }
    }
}

export default getState;



    // getCharacters: () => {
    //     const { urlCharacters } = getStore();
    //     fetch(urlCharacters)
    //         .then((response) => response.json())
    //         .then(data => {
    //             const { results } = data;
    //             setStore({ characters: results })

    //         }
    //         );
    // },
    // getCharactersDesc: async (id) => {
    //     const { urlCharactersDesc } = getStore();
    //     fetch(urlCharactersDesc + id)
    //         .then((response) => response.json())
    //         .then(data => {
    //             const { result } = data;
    //             setStore({ charactersDesc: result })
    //         }
    //         );
    // },
    // getPlanets: () => {
    //     const { urlPlanets } = getStore();
    //     fetch(urlPlanets)
    //         .then((response) => response.json())
    //         .then(data => {
    //             const { results } = data;
    //             setStore({ planets: results })

    //         }
    //         );
    // },
    // getPlanetsDesc: async (id) => {
    //     const { urlPlanetsDesc } = getStore();
    //     fetch(urlPlanetsDesc + id)
    //         .then((response) => response.json())
    //         .then(data => {
    //             const { result } = data;
    //             console.log("results", result)
    //             setStore({ planetsDesc: result })
    //         }
    //         );
    // },
    // getStarships: () => {
    //     const { urlStarships } = getStore();
    //     fetch(urlStarships)
    //         .then((response) => response.json())
    //         .then(data => {
    //             const { results } = data;
    //             setStore({ starships: results })

    //         }
    //         );
    // },
    // getStarshipsDesc: async (id) => {
    //     const { urlStarshipsDesc } = getStore();
    //     fetch(urlStarshipsDesc + id)
    //         .then((response) => response.json())
    //         .then(data => {
    //             const { result } = data;
    //             setStore({ starshipsDesc: result })
    //         }
    //         );
    // },
    // updateFavorites: (name, link) => {
    //     const { favorites } = getStore();
    //     favorites.push({ name, link })
    //     setStore({ favorites: [...favorites] })
    // },
    // deleteFavorite: (index) =>{
    //     const { favorites } = getStore();
    //     favorites.splice(index, 1);
    //     setStore({ favorites: [...favorites] })
    // }