import pizza from './NavBar.module.css';
import {Link} from 'react-router-dom'

/**
 * Roberto Sanchez
 * robsanchez17772@gmail.com
 *
 * Description:
 * Renders a navigation bar with the links to other pages on my site
 */
export default function NavBar() {
  return (
    <div className={pizza.NavBar}>
        <Link to="/home">to home</Link>
        <Link to="/creed">to creed</Link>
    </div>
  );
}
