import React, { useRef } from 'react';
import Navigation from '../components/Navigation';

import { useStore, usePostStore } from '../store/myStore';

function CreatePostPage() {
  const imageRef = useRef();
  const titleRef = useRef();
  const { createNewPost } = usePostStore();
  const { myUser } = useStore();

  const handlePostCreation = () => {
    const image = imageRef.current.value;
    const title = titleRef.current.value;
    if (!image || !title) {
      alert('Please fill in all fields');
      return;
    }
    createNewPost(image, title, myUser?.username);
    console.log(`Post Created: `, {
      image,
      title,
      title,
      username: myUser?.username,
    });
    imageRef.current.value = '';
    titleRef.current.value = '';
    alert('Post created successfully!');
  };
  return (
    <div>
      <Navigation />
      <div className='post-card'>
        <input type='text' ref={imageRef} placeholder='Post image URL' />
        <input type='text' ref={titleRef} placeholder='Post title' />
        <button onClick={handlePostCreation}>Create Post</button>
      </div>
    </div>
  );
}

export default CreatePostPage;
