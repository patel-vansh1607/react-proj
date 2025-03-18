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
            link
        </header>
    )
}

export default HeaderComponent