const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiUrl: `${process.env.REACT_APP_API_URL}`,
            token: null,
            notas:[],
            user_img:"",
            
        },
        actions: {
            loginUser: async (nombre_usuario, password) => {
                const store = getStore();
                const met = {
                    method: "POST",
                    body: JSON.stringify({
                        nombre_usuario,
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
            userLogged: async (token) => {
                const store = getStore();
                const met = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
                const response = await fetch(`${store.apiUrl}/api/tokencheck`, met);
                console.log(response.status)
                if (response.status !== 200 ){
                    setStore({token: null})
                }else{
                    const data = await response.json();
                    localStorage.setItem("userToken", data.access_token);
                    setStore({ token: data.access_token });
                    
                }
            },
            getNotas: async () => {
                const store = getStore();
                const met = {
                    method:'GET',
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${store.token}`
                    }
                }
                const response = await fetch (`${store.apiUrl}/api/profile`, met);
                if (response.status !==200){
                    return false
                }else{
                    const data = await response.json();
                    setStore({notas: data.notas})
                    return true
                }
            },
            postNota: async (titulo, contenido) =>{
                const store = getStore();
                const met = {
                    method: 'POST',
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${store.token}`
                    },
                    body:JSON.stringify({
                        titulo,
                        contenido
                    })
                }
                const response = await fetch(`${store.apiUrl}/api/note`, met);
                if(response.status == 200){
                    store.notas.push({titulo,contenido});
                    setStore({notas:store.notas});
                    return true
                }else {
                    return false
                }
                
            },


            Logout: () =>{
                localStorage.removeItem('userToken');
                setStore({token:null, notas:[]})
            },

            
        }
    }
}

export default getState;



