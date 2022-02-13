import { Link } from 'react-router-dom';
import '../css/main.css';
const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/client">Client</Link>
    </header>
  );
};

export default Header;
