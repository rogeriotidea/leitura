const api = "http://localhost:3001";

let token = localStorage.token;
if (!token) {
   token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getCategorias = () =>
    fetch(`${api}/categories`, { headers, method: 'GET'})
        .then(res => res.json())
        .then(data => data.categories);

export const getPosts = () =>
   fetch(`${api}/posts`, { headers, method: 'GET'})
        .then(res => res.json())
