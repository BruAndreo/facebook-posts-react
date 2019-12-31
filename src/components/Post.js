import React from 'react';

function Post({ post }) {
  return (
    <div className="card-post">
      <img src={post.author.avatar} />
      <p>{post.author.name}</p>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;