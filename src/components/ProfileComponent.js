import { useEffect, useState } from "react"
import "./ProfileComponent.css"
import ProfileData from "../data/profile.json"



const ProfileComponent = () => {
    const [team, setTeam] = useState ([
       useEffect (() =>{
        setTeam(ProfileData)
       },[])
    ])
    const [selectedDriver, setSelectedDriver] = useState();

    return(
        <div className="div2">
            <h1>Meet the Racers</h1>

            {selectedDriver ? (
                <div className="driver-profile">
                    <button onClick={() => setSelectedDriver(null)}>← Back</button>
                    <h2>{selectedDriver.name}</h2>
                    <img src={selectedDriver.origin} width={100} />
                    <h3>Team: {selectedDriver.racing_team}</h3>
                    <h4>Race Number: {selectedDriver.race_number}</h4>
                    <img src={selectedDriver.img_url} alt={selectedDriver.name} width={200} />
                    <p>{selectedDriver.bio}</p>
                </div>
            ) : (
                <div className="header2">
                    {team?.team_members?.map((member, index) => (
                        <div key={index} className="team-members" onClick={() => setSelectedDriver(member)}>
                            <hr />
                            <div className="intro">
                                <h2 className="team-name">{member.name}</h2>
                                <div className="img1">
                                    <img src={member.origin} width={100} />
                                </div>
                            </div>
                            <hr />
                            <p className="team-racing_team">{member.racing_team}</p>
                            <div className="d-img">
                                <p className="member-racing_number">{member.race_number}</p>
                                <img src={member.img_url} alt="Driver" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProfileComponent