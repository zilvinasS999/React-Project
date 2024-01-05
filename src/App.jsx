import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import CreatePostPage from './pages/CreatePostPage';
import SinglePostPage from './pages/SinglePostPage';
import UserPostsPage from './pages/UserPostsPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <IndexPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/createpost'
          element={
            <ProtectedRoute>
              <CreatePostPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/singlepost/:postId'
          element={
            <ProtectedRoute>
              <SinglePostPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/userposts/:username'
          element={
            <ProtectedRoute>
              <UserPostsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
