import React, { useEffect, useState } from 'react';
import { usePostStore } from '../store/myStore';
import { Link } from 'react-router-dom';

function AllPosts() {
  const { posts } = usePostStore();
  const [sortedPosts, setSortedPosts] = useState(posts);

  useEffect(() => {
    setSortedPosts(posts);
  }, [posts]);

  const sortByTitle = () => {
    const sortedByTitle = [...posts].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setSortedPosts(sortedByTitle);
  };

  const sortByUploadTime = () => {
    const sortedByUploadTime = [...posts].sort(
      (a, b) => a.timestamp - b.timestamp
    );
    setSortedPosts(sortedByUploadTime);
  };

  return (
    <div className='all-posts'>
      <div className='sorting-buttons'>
        <button onClick={sortByTitle}>Sort by Title</button>
        <button onClick={sortByUploadTime}>Sort by Upload Time</button>
      </div>
      <div className='posts-container'>
        {sortedPosts.map((post, index) => (
          <div key={post.id || index} className='all-post'>
            <Link to={`/singlepost/${post.id}`} className='link'>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
            </Link>
            <Link className='link' to={`/userposts/${post.username}`}>
              <p>{post.username}</p>
            </Link>
            <p>{new Date(post.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
