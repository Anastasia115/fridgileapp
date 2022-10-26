import React from "react";
import "./ProfilePage1.css";
import editProfile from "../../../assets/shoppingListIcons/editicon.svg";
import ProfilePic from "../../../assets/images/profilepic.jpg";
import Statistics from "../../../assets/images/statistics.svg";
import LogOut from "../../../assets/images/logout.svg";

export function ProfilePage1() {

    return(
        <>
        <div className="titleprofile">
            <h2>My profile</h2>
            <img src={editProfile} 
            title="title"
            alt="edit profile"
            // onClick={() =>}
            />
        </div>
        <div className="main-section">
            <img src={ProfilePic} 
            title="profilepic"
            alt="profile picture"/>
            <h3>Severus</h3>
            <p>severussnape@hogwarts.com</p>
        </div>
        <div className="statistics">
            <img src={Statistics}
            alt="statistics"/>
        </div>
        <div className="invite">
            <p>
            Send an invitation to your friends so you 
            can synchronize your fridges and shopping lists.
            </p>
            <button>Send invite</button>
        </div>
        <div className="logout">
            <button>Log out</button>
            <img src={LogOut}
            alt="log out icon"/>
        </div>
        </>
    );
}
