// client/src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import { PostProvider } from './context/PostContext.jsx';
import Layout from './components/Layout.jsx';
import PostList from './components/PostList.jsx';
import PostView from './components/PostView.jsx';
import PostForm from './components/PostForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PostList />} />
            <Route path="posts/:id" element={<PostView />} />
            <Route path="create" element={<PostForm />} />
            <Route path="edit/:id" element={<PostForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  </StrictMode>
);
