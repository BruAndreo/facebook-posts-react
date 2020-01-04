import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comentario">
      <span className="perfil">
        <img src={comment.author.avatar} className="imagem-perfil" />

        <span className="nome-data" >
          <p className="nome-perfil" >{comment.author.name}</p>
        </span>
      </span>

      <p className="conteudo-comentario" >{comment.content}</p>
    </div>
  );
}

export default Comment;