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
).then(res => res.json()).then(data => data).catch((err) => {  throw Error(err); })

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

export const editarPost = (data) => fetch(
    `${api}/posts/${data.id}`,
    {
        method: 'put',
        headers: headers,
        body: JSON.stringify(data)
    }
).then(res => res.json()).then(data => data)

export const votePost = (id, tipovoto) => fetch(
    `${api}/posts/${id}`,
    {
        method: 'post',
        headers: headers,
        body: JSON.stringify({option: tipovoto})
    }
)

export const getComentarios = (id) => fetch(
    `${api}/posts/${id}/comments`,
    {
        method: 'get',
        headers: headers
    }
).then(res => res.json()).then(data => data)

export const salvarComentario = (data) => fetch(
    `${api}/comments`,
    {
        method: 'post',
        headers: headers,
        body: JSON.stringify(data)
    }
).then(res => res.json()).then(data => data)

export const editarComentario = (data) => fetch(
    `${api}/comments/${data.id}`,
    {
        method: 'put',
        headers: headers,
        body: JSON.stringify(data)
    }
).then(res => res.json()).then(data => data)


export const excluirComentario = (data) => fetch(
    `${api}/comments/${data}`,
    {
        method: 'delete',
        headers: headers
    }
)

export const voteComentario = (id, tipovoto) => fetch(
    `${api}/comments/${id}`,
    {
        method: 'post',
        headers: headers,
        body: JSON.stringify({option: tipovoto})
    }
)

export const retornaComentario = (data) => fetch(
    `${api}/comments/${data}`,
    {
        method: 'get',
        headers: headers,
    }
).then(res => res.json()).then(data => data)
