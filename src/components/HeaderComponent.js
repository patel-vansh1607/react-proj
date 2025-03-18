import { useState } from "react"

const HeaderComponent = () => {
    const [links, setLinks] = useState([
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