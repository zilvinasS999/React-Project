import React from 'react';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import SinglePost from '../components/SinglePost';

function SinglePostPage() {
  const { postId } = useParams();
  const numericalPostId = parseInt(postId, 10);
  return (
    <div>
      <Navigation />
      <SinglePost id={numericalPostId} />
    </div>
  );
}

export default SinglePostPage;
