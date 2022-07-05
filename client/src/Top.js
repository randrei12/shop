import { Link } from 'react-router-dom';
import './css/navBar.css';

function Top() {
    return (
        <div className="navBar">
            <div className="container">
                <Link to='/'>
                    <img src='assets/logo_banner.png' alt='AND Store' />
                </Link>
                <div className="searchDiv">
                    <input type='search' placeholder='Search...' />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="navRightSide">
                    <Link to='/account'><i className="fa-solid fa-user"></i><span className='nameSpan'> Account</span></Link>
                    <Link to='/bookmarks'><i className="fa-solid fa-bookmark"></i><span className='nameSpan'> Bookmarks</span></Link>
                    <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i><span className='nameSpan'> Cart</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Top;