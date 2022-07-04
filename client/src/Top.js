import { Link } from 'react-router-dom';
import './css/navBar.css';

function Top() {
    return (
        <div className="navBar">
            <div className="container">
                <Link to='/'>
                    <img src='assets/logo_banner.png' />
                </Link>
                <div className="searchDiv">
                    <input type='search' placeholder='Search...' />
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div>
                    <button>Account</button>
                    <button>Favorites</button>
                    <button>Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Top;