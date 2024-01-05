import React from 'react';
import { usePostStore } from '../store/myStore';

function DeleteOldPostsButton() {
  const { posts, setPosts } = usePostStore();

  const deleteOldPosts = () => {
    const updatedPosts = posts.filter((post) => post.id);
    setPosts(updatedPosts);
    alert('Old posts without an ID have been deleted.');
  };
  return (
    <div>
      <button onClick={deleteOldPosts}></button>
    </div>
  );
}

export default DeleteOldPostsButton;
