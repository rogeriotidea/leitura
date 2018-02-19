const api = "http://localhost:3001";

let token = localStorage.token;
if (!token) {

   token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
}

export const getCategorias = () =>
    fetch(`${api}/categories`, { headers, method: 'GET'})
        .then(res => res.json())
        .then(data => data.categories);

export const getPosts = () =>
   fetch(`${api}/posts`, { headers, method: 'GET'})
        .then(res => res.json())


export const retornaPost = (data) => fetch(
    `${api}/posts/${data}`,
    {
        headers: headers,
    }
).then(res => res.json()).then(data => data)

export const excluirPost = (data) => fetch(
    `${api}/posts/${data}`,
    {
        method: 'delete',
        headers: headers
    }
)

export const criarNovoPost = (data) => fetch(
    `${api}/posts`,
    {
        method: 'post',
        headers: headers,
        body: JSON.stringify(data)
    }
).then(res => res.json()).then(data => data)


export const editarPost = () =>
    fetch(`${api}/posts`, { headers, method: 'GET'})
        .then(res => res.json())

