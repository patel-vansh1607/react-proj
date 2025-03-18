import { useState } from "react"
import "./ProfileComponent.css"
import landoNorris from "../images/drivers/lando-norris.avif"
import unitedkingdom from  "../images/flags/united-kindgom.avif"


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
            name: "LANDO NORRIS",
            origin: unitedkingdom ,
            racing_team: "Mclaren",
            img_url: landoNorris,
            race_number: "4",
        },
        {
            name: "GEORGE RUSSELL",
            origin: unitedkingdom ,
            racing_team: "Mclaren",
            img_url: landoNorris,
            race_number: "4",
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