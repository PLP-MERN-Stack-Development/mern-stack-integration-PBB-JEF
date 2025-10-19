// client/src/components/PostList.jsx

import { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import { Link } from 'react-router-dom';

const PostList = () => {
  const { get, loading, error } = useApi();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `/api/posts?page=${page}&limit=5&keyword=${keyword}&category=${category}`;
      const data = await get(query);
      if (data) {
        setPosts(data.posts || []);
        setTotalPages(data.totalPages || 1);
      }
    };
    fetchPosts();
  }, [page, keyword, category]);

  return (
    <div>
      <h2>Blog Posts</h2>

      {/* Search and Filter */}
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setPage(1); // reset to first page on search
          }}
        />
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1); // reset to first page on filter
          }}
        >
          <option value="">All Categories</option>
          <option value="tech">Tech</option>
          <option value="travel">Travel</option>
          <option value="food">Food</option>
        </select>
      </div>

      {/* Post List */}
      {loading && <p>Loading...</p>}
      {error && <p>Error loading posts</p>}
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <Link to={`/posts/${post._id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body?.slice(0, 100)}...</p>
          </div>
        ))
      )}

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
