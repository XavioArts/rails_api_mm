import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Link to="/">Monster Manual</Link>
            <Link to="/about">About</Link>
        </div>
    )
};

export default Navbar;