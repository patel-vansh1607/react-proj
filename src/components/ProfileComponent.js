import { useState } from "react"
import "./ProfileComponent.css"
import landoNorris from "../images/drivers/lando-norris.avif"
import maxVerstapen from "../images/drivers/max-verstappen.avif"
import georgeRussell from "../images/drivers/george-russell.avif"
import kimiAntonelli from "../images/drivers/kimi-antonelli.avif"
import alexanderAlbon from "../images/drivers/kimi-antonelli.avif"
import lanceStroll from "../images/drivers/lando-norris.avif"
import nicoHulkenburg from "../images/drivers/max-verstappen.avif"
import charlesLeclerc from "../images/drivers/george-russell.avif"
import oscarPiastri from "../images/drivers/kimi-antonelli.avif"
import lewisHamilton from "../images/drivers/kimi-antonelli.avif"
import pierreGasly from "../images/drivers/lando-norris.avif"
import yukiTsunoda from "../images/drivers/max-verstappen.avif"
import estabenOcon from "../images/drivers/george-russell.avif"
import oliverBearman from "../images/drivers/kimi-antonelli.avif"
import jackDoohan from "../images/drivers/kimi-antonelli.avif"
import fernandoAlonso from "../images/drivers/lando-norris.avif"
import gabrielBortoleto from "../images/drivers/max-verstappen.avif"
import isackHadjar from "../images/drivers/george-russell.avif"
import laimLawson from "../images/drivers/kimi-antonelli.avif"
import carlozSainz from "../images/drivers/kimi-antonelli.avif"



import unitedkingdom from  "../images/flags/united-kindgom.avif"

import netherlands from  "../images/flags/netherlands.avif"


const ProfileComponent = () => {
    const [team] = useState ([
        {
            name: "LANDO NORRIS",
            origin: unitedkingdom ,
            racing_team: "Mclaren",
            img_url: landoNorris,
            race_number: "4",
        },
        {
            name: "MAX VERSTAPPEN",
            origin: netherlands ,
            racing_team: "Red Bull Racing",
            img_url: maxVerstapen,
            race_number: "1",
        },
        {
            name: "GEORGE RUSSELL",
            origin: unitedkingdom ,
            racing_team: "Mercedes",
            img_url: georgeRussell,
            race_number: "63",
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