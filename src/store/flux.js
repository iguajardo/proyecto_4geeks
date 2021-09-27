const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
        
        },
        actions: {
        
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