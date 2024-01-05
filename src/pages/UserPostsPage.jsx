import React from 'react';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import { usePostStore } from '../store/myStore';

function UserPostsPage() {
  const { username } = useParams();
  const posts = usePostStore((state) =>
    state.posts.filter((post) => post.username === username)
  );
  return (
    <div>
      <Navigation />
      <div className='user-posts'>
        {posts.map((post, index) => (
          <div key={index} className='post'>
            <img src={post.image} alt={post.title}></img>
            <h3>{post.title}</h3>
            <p>{new Date(post.timestamp).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPostsPage;
