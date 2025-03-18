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
                    <a key={key}>{li}</a>
                )
            })}
        </header>
    )
}

export default HeaderComponent