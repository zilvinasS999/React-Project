import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import AllPosts from '../components/AllPosts';
import { usePostStore } from '../store/myStore';

function IndexPage() {
  const posts = usePostStore((state) => state.posts);

  useEffect(() => {
    console.log('Current posts:', posts);
  }, [posts]);

  return (
    <div>
      <Navigation />

      <div className='posts'>
        <AllPosts />
      </div>
    </div>
  );
}

export default IndexPage;
