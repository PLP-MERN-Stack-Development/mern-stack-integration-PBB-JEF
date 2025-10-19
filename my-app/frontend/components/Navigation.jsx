// Navigation.jsx
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/">Posts</Link> | <Link to="/create">Create Post</Link>
  </nav>
);

export default Navigation;
