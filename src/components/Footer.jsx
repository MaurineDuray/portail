import {HashLink} from "react-router-hash-link";

const Footer = (props) => {
    return (  
        <>
            <footer>
                <div className="wrapper">
                    <div className="navicopy">
                        <HashLink to="/#home"> Accueil </HashLink>&nbsp;|&nbsp;
                        <HashLink to="/#society"> Society </HashLink>
                        <span>
                            &copy; EPSE - tous droits réservés
                        </span>
                    </div>
                    <div className="foot-logo">
                        Logo
                    </div>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;