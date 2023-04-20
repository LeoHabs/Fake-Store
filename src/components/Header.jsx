import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return <header className="header">
        <div className="header-content">
            <Link to={"/"}>
                <img className="logo" alt="Fake logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a4ef0a52169333.5907a34e170ee.png" />
            </Link>
            <div className="links-container">
                <Link className={"link"} to={"category/womenswear"}>Women's Clothing</Link>
                <Link className={"link"} to={"category/menswear"}>Men's Clothing</Link>
                <Link className={"link"} to={"category/jewelery"}>Jewelery</Link>
                <Link className={"link"} to={"category/electronics"}>Electronics</Link>
            </div>
        </div>
        <div className="horizontal-line" />
    </header>
}

export default Header;