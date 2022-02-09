import { Link } from 'react-router-dom';
import '../css/main.css';
const Header = () => {
    return (
       <header>
          <Link to="/">Home</Link>
           <Link to="/client">Client</Link>
       </header>
       //<nav className='navbar'>
      //     <div className="links">
        //   <a href='/'>HOME</a>
          // <a href='/client'>CLIENT</a>
           //</div>
       //</nav>
    )
}

export default Header