import { useState } from "react"
import "./ProfileComponent.css"
import landoNorris from "../images/drivers/lando-norris.avif"
import maxVerstapen from "../images/drivers/max-verstappen.avif"
import georgeRussell from "../images/drivers/george-russell.avif"
import kimiAntonelli from "../images/drivers/kimi-antonelli.avif"
import alexanderAlbon from "../images/drivers//alexander-albon.avif"
import lanceStroll from "../images/drivers/lance-stroll.avif"
import nicoHulkenburg from "../images/drivers/nico-hulkenberg.avif"
import charlesLeclerc from "../images/drivers/charles-leclerc.avif"
import oscarPiastri from "../images/drivers/oscar piastri.avif"
import lewisHamilton from "../images/drivers/lewis-hamilton.avif"
import pierreGasly from "../images/drivers/pierre-gasly.avif"
import yukiTsunoda from "../images/drivers/yuki-tsunoda.avif"
import estabenOcon from "../images/drivers/estaben-ocon.avif"
import oliverBearman from "../images/drivers/oliver-bearman.avif"
import jackDoohan from "../images/drivers/jack-doohan.avif"
import fernandoAlonso from "../images/drivers/fernando-alonzo.avif"
import gabrielBortoleto from "../images/drivers/gabriel-bortoletto.avif"
import isackHadjar from "../images/drivers/isack-hadjar.avif"
import laimLawson from "../images/drivers/laim-lawson.avif"
import carlozSainz from "../images/drivers/carloz-sainz.avif"



import unitedkingdom from  "../images/flags/united-kindgom.avif"
import netherlands from  "../images/flags/netherlands.avif"
import italy from  "../images/flags/italy.avif"
import thailand from  "../images/flags/thailand.avif"
import canada from  "../images/flags/cananda.avif"
import germany from  "../images/flags/germany.avif"
import moncacco from  "../images/flags/monacco.avif"
import australia from  "../images/flags/australia.avif"
import france from  "../images/flags/france.avif"
import japan from  "../images/flags/japan.avif"
import spain from  "../images/flags/spain.avif"
import brazil from  "../images/flags/brazil.avif"
import newzeland from  "../images/flags/newzeland.avif"



const ProfileComponent = () => {
    const [team] = useState ([
        {
            name: "Lando NORRIS",
            origin: unitedkingdom ,
            racing_team: "McLaren",
            img_url: landoNorris,
            race_number: "4",
        },
        {
            name: "Max VERSTAPPEN",
            origin: netherlands ,
            racing_team: "Red Bull Racing",
            img_url: maxVerstapen,
            race_number: "1",
        },
        {
            name: "George RUSSELL",
            origin: unitedkingdom ,
            racing_team: "Mercedes",
            img_url: georgeRussell,
            race_number: "63",
        },
        {
            name: "Kimi ANTONELLI",
            origin: italy ,
            racing_team: "Mercedes",
            img_url: kimiAntonelli,
            race_number: "12",
        },
        {
            name: "Alexander ALBON",
            origin: thailand ,
            racing_team: "Williams",
            img_url: alexanderAlbon,
            race_number: "23",
        },
        {
            name: "Lance STROLL",
            origin: canada ,
            racing_team: "Aston Martin",
            img_url: lanceStroll,
            race_number: "18",
        },
        {
            name: "Nico HULKENBURG",
            origin: germany ,
            racing_team: "Kick Sauber",
            img_url: nicoHulkenburg,
            race_number: "27",
        },
        {
            name: "Charles LECLERC",
            origin: moncacco ,
            racing_team: "Ferrari",
            img_url: charlesLeclerc,
            race_number: "16",
        },
        {
            name: "Oscar PIASTRI",
            origin: australia ,
            racing_team: "McLaren",
            img_url: oscarPiastri,
            race_number: "81",
        },
        {
            name: "Lewis HAMILTON",
            origin: unitedkingdom ,
            racing_team: "Ferrari",
            img_url: lewisHamilton,
            race_number: "44",
        },
        {
            name: "Pierre GASLY",
            origin: france ,
            racing_team: "Alpine",
            img_url: pierreGasly,
            race_number: "10",
        },
        {
            name: "Yuki TSUNODA",
            origin: japan ,
            racing_team: "Racing Bulls",
            img_url: yukiTsunoda,
            race_number: "22",
        },
        {
            name: "Estaben OCON",
            origin: france ,
            racing_team: "Haas",
            img_url: estabenOcon,
            race_number: "31",
        },
        {
            name: "Oliver BEARMAN",
            origin: unitedkingdom ,
            racing_team: "Haas",
            img_url: oliverBearman,
            race_number: "87",
        },
        {
            name: "Jack DOOHAN",
            origin: australia ,
            racing_team: "Alpine",
            img_url: jackDoohan,
            race_number: "7",
        },
        {
            name: "Fernando ALONZO",
            origin: spain ,
            racing_team: "Aston Martin",
            img_url: fernandoAlonso,
            race_number: "14",
        },
    ])

    return(
        <div className="div2">
            <h1>Meet the Racers</h1>
            <div className="header2">
            {team.map((member, index) =>{
                return(
                        <div key={index} className="team-members" >
                            <hr my-xxs border-greyLight></hr>
                        <div className="intro">
                            <h2 className="team-name">{member.name}</h2>
                            <div className="img1">
                                <img src={member.origin} width={100}></img>
                            </div>
                        </div>
                        <hr my-xxs border-greyLight></hr>
                        <p className="team-racing_team">{member.racing_team}</p>
                        <div className="d-img">
                            <p className="member-racing_number">{member.race_number}</p>
                            <img src={member.img_url} alt="Driver" />
                        </div>

                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default ProfileComponent