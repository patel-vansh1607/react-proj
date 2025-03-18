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

        </header>
    )
}

export default HeaderComponent