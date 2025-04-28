import { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => { // xecuta alguma função (efeito colateral) depois que o componente for renderizado
    fetch ('https://jsonplaceholder.typicode.com/posts') // faz uma requisição para a API
      .then(res => res.json()) // converte a resposta em JSON
      .then(dados => setPosts(dados)) // atualiza o estado com os dados recebidos
      .catch(erro => console.log('Erro ao buscar posts:', erro)) // trata o erro caso ocorra
  }, [] // array vazio significa que o efeito só será executado uma vez, como componentDidMount
  );

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key = {post.id} style={{ marginBottom: "20px"}}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    
    </div>
  );

}

export default Posts;