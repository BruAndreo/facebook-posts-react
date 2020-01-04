import React from 'react';

function Post({ post }) {
  return (
    <div className="card-post">
      
      <span className="perfil">
        <img src={post.author.avatar} className="imagem-perfil" />

        <span className="nome-data" >
          <p className="nome-perfil" >{post.author.name}</p>
          <p className="data-post" >{post.date}</p>
        </span>
      </span>
      
      <p className="conteudo-post" >{post.content}</p>

      <hr />
    </div>
  );
}

export default Post;