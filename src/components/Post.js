import React from 'react';
import Comment from './Comment';

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

      {post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </div>
  );
}

export default Post;