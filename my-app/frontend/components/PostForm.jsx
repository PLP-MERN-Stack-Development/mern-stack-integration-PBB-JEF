// client/src/components/PostForm.jsx

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { get, post, put, loading, error } = useApi();

  const [form, setForm] = useState({ title: '', body: '', category: '', featuredImage: '' });
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    get('/api/categories').then(setCategories);
    if (id) get(`/api/posts/${id}`).then(data => {
      setForm(data);
      setImagePreview(data.featuredImage || '');
    });
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async e => {
    const file = e.target.files[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (data.imageUrl) {
      setForm(prev => ({ ...prev, featuredImage: data.imageUrl }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.body.trim()) newErrors.body = 'Body is required';
    if (!form.category) newErrors.category = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    const result = id
      ? await put(`/api/posts/${id}`, form)
      : await post('/api/posts', form);

    if (result) navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit' : 'Create'} Post</h2>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
      />
      {errors.title && <p className="error">{errors.title}</p>}

      <textarea
        name="body"
        value={form.body}
        onChange={handleChange}
        placeholder="Body"
      />
      {errors.body && <p className="error">{errors.body}</p>}

      <select name="category" value={form.category} onChange={handleChange}>
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>
      {errors.category && <p className="error">{errors.category}</p>}

      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px' }} />}

      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save'}
      </button>

      {error && <p className="error">Error: {error}</p>}
    </form>
  );
};

export default PostForm;

