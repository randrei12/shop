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
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="navRightSide">
                    <button><i className="fa-solid fa-user"></i><span className='nameSpan'> Account</span></button>
                    <button><i className="fa-solid fa-bookmark"></i><span className='nameSpan'> Bookmarks</span></button>
                    <button><i className="fa-solid fa-cart-shopping"></i><span className='nameSpan'> Cart</span></button>
                </div>
            </div>
        </div>
    );
}

export default Top;