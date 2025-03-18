import { useState } from "react"
import "./HeaderComponent.css"
import { Link } from "react-router-dom"
import logo from "../images/f1-logo.png"; 

const HeaderComponent = () => {
    const [links] = useState([
        "Home",
        "About",
        "Contact",
        "Auth"
    ])
    return(
        <header>
            <img src={logo} alt="F1 Logo" className="logo" />
            {links.map((li, key) =>{
                return(
                    <div key={key}>
                        <Link className="nav-links" to={`/${li}`}>{li}</Link>
                    </div>
                )
            })}
        </header>
    )
}

export default HeaderComponent