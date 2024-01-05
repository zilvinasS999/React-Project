import React from 'react';
import { usePostStore } from '../store/myStore';

function SinglePost({ id }) {
  const post = usePostStore((state) =>
    state.posts.find((post) => post.id === id)
  );

  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <div>
        <h2>{post.title}</h2>
        <h2>{post.username}</h2>
        <p>{new Date(post.timestamp).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default SinglePost;
