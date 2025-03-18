import FooterComp from "../components/footer"
import HeaderComponent from "../components/HeaderComponent"
import Navbar from "../components/navBar"
import ProfileComponent from "../components/ProfileComponent"

const AboutPage = () => {
    return(
        <div>
            <HeaderComponent />
            <Navbar />
            <ProfileComponent />
            <FooterComp/>
        </div>
    )
}

export default  AboutPage