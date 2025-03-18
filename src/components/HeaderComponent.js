import { useState } from "react"
import "./HeaderComponent.css"

const HeaderComponent = () => {
    const [links] = useState([
        "Home",
        "About",
        "Contact",
        "Auth"
    ])
    return(
        <header>
            {links.map((li, key) =>{
                return(
                    <div key={key}>
                        <a href={`/${li}`}>{li}</a>
                    </div>
                    
                )
            })}
        </header>
    )
}

export default HeaderComponent