import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';

const PostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { get } = useApi();

  useEffect(() => {
    get(`/api/posts/${id}`).then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p><strong>Category:</strong> {post.category?.name}</p>
    </div>
  );
};

export default PostView;
