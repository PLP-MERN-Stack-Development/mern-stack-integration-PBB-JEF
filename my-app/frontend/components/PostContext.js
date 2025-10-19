import { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <PostContext.Provider value={{ posts, setPosts, categories, setCategories }}>
      {children}
    </PostContext.Provider>
  );
};
