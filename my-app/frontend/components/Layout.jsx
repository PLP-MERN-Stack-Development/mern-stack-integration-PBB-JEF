// Layout.jsx
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => (
  <>
    <Navigation />
    <main><Outlet /></main>
  </>
);

export default Layout;
