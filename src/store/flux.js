const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiUrl: `${process.env.REACT_APP_API_URL}`,
            token: null,
            notas:[]
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
                const response = await fetch(`${store.apiUrl}/api/auth`, met);
                const data = await response.json();

                if (data.access_token) {

                    localStorage.setItem("userToken", data.access_token);
                    setStore({ token: data.access_token });
                }

                return response;
            },
            userLogged: async () => {
                const store = getStore();
                const met = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${store.token}`
                    }
                }
                const response = await fetch(`${store.apiUrl}/api/tokencheck`, met);
                if (response.status !== 200 ){
                    setStore({token: null})
                }else{
                    const data = await response.json();
                    setStore({ token: data.access_token });
                }
                
            }
        }
    }
}

export default getState;



