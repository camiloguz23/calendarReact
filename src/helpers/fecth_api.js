const url_base = "https://calendariobackend.herokuapp.com/"

export const Fetch_custom = (endpoint,data,method = "GET") => {

    const url = `${url_base}${endpoint}`

    if (method === "GET") {

        return fetch(url)
        
    }else if(method ==="DELETE"){
        return fetch(url, {
            method:method,
            headers:{
                "Content-Type":"application/json"
            },
            
        })

    } else {
        return fetch(url, {
            method:method,
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }
}