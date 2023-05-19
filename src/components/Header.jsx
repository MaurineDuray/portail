import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = (props) => {
    return (
        <>
            <div className="menu-mobile">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/">Présentation</Link>
                    </li>
                    <li>
                        <HashLink to="/#society">Sociétés</HashLink>
                    </li>
                </ul>
            </div>
            <header>
                <div id="header-info">
                    <div className="wrapper">
                        <div className="header-social">
                            Social Media
                        </div>
                    </div>
                </div>
                <div id="myheader">
                    <div className="wrapper">
                        <Link to="/" id="logo">LOGO</Link>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Accueil</Link>
                                </li>
                                <li>
                                    <Link to="/presentation">Présentation</Link>
                                </li>
                                <li>
                                    <HashLink to="/#society">Sociétés</HashLink>
                                </li>
                            </ul>
                        </nav>
                        <div id="burger">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
      );
}
 
export default Header;