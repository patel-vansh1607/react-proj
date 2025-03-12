import './footer.css'
import logo from "../images/f1-logo.png"; 


const FooterComp = () => {
    return(
        <div>
            <footer className="footer">
            <div className="footer-container">
            <img src={logo} alt="F1 Logo" className="footer-logo" />
                </div>
                <div className="footer-bottom">
                    <p>© 2003-2025 Formula One World Championship Ltd.</p>
                </div>
            </footer>
        </div>
    )
}

export default FooterComp