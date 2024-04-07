import { Link } from "react-router-dom";


const Header= ()=>{
    return (
        <header className="shadow-md">
            <nav className="flex justify-between px-5 items-center">
                <a href="/">
                    <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="logo" className="size-24 object-contain"></img>
                </a>
                <ul className="flex gap-24">
                    {/* <li className="text-lg font-medium"><i className="ri-search-line"></i>Search</li> */}
                    <li className="text-lg font-medium">
                        <Link to="/offers"><i className="ri-magic-line"></i>Offers</Link>
                    </li>
                    <li className="text-lg font-medium">
                        <Link to="/login"><i className="ri-login-box-line"></i>Login</Link>
                    </li>
                    <li className="text-lg font-medium">
                        <Link to="/help"><i className="ri-hand-heart-line"></i>Help</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;