import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://media.licdn.com/dms/image/C5603AQFRo1GntuOqbQ/profile-displayphoto-shrink_100_100/0?e=1583366400&v=beta&t=SLmrALCwGs559WpJFvHhPJX-cj8Qr9kFH7pmRDNcuYM"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://media.licdn.com/dms/image/C5603AQFRo1GntuOqbQ/profile-displayphoto-shrink_100_100/0?e=1583366400&v=beta&t=SLmrALCwGs559WpJFvHhPJX-cj8Qr9kFH7pmRDNcuYM"
            },
            content: "Cara a Rocketseat está sim, temos umas vagas muitos boas. Vale a pena conferir através do LinkedIn deles."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Bruno Andreo",
          avatar: "https://media.licdn.com/dms/image/C5603AQFRo1GntuOqbQ/profile-displayphoto-shrink_100_100/0?e=1583366400&v=beta&t=SLmrALCwGs559WpJFvHhPJX-cj8Qr9kFH7pmRDNcuYM"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://media.licdn.com/dms/image/C5603AQFRo1GntuOqbQ/profile-displayphoto-shrink_100_100/0?e=1583366400&v=beta&t=SLmrALCwGs559WpJFvHhPJX-cj8Qr9kFH7pmRDNcuYM"
            },
            content: "Cara a Rocketseat está sim, temos umas vagas muitos boas. Vale a pena conferir através do LinkedIn deles."
          }
        ]
      },
    ]
  }
  
  render() {
    return (
      <div className="post-list">
        <ul>
          {this.state.posts.map(post => <Post key={post.id} post={post} />)}
        </ul>
      </div>
    );
  }
}

export default PostList;