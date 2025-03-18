import { useState } from "react"
import { Link } from "react-router-dom"
import {profile} from "../images/photo_2023-12-03_16-51-43.jpg"


const ProfileComponent = () => {
    const [team] = useState ([
        {
            name: "Vansh Patel",
            role: "Full-Stack Engineering Student",
            img_url: "/src/images/photo_2023-12-03_16-51-43.jpg",
            linked_in_url: "https://www.linkedin.com/in/vansh-patel-72650b26a",
            github_url: "https://github.com/patel-vansh1607",
            description: "I am Vansh Patel"
        }
    ])

    return(
        <div>
            <h1>Meet the Team</h1>
            <header>
            {team.map((member, index) =>{
                return(
                    <div key={index} className="team-members">
                        <img src={profile}></img>
                        <h2 className="member-name">{member.name}</h2>
                        <p className="member-role">{member.role}</p>
                        <p className="member-description">{member.description}</p>
                        <Link to = {member.github_url}> Github</Link>
                        <Link to = {member.linked_in_url}> Linked-In</Link>
                    </div>
                )
            })}
        </header>
        </div>
    )
}

export default ProfileComponent