import React from "react";
import profile from "../images/left_menu/profile_small.png"
import friends from "../images/left_menu/friends_small.png"
import posts from "../images/left_menu/posts_small.png"
import video from "../images/left_menu/video_small.png"
import music from "../images/left_menu/music_small.png"
import photo from "../images/left_menu/photo_small.png"
import message from "../images/left_menu/message_small.png"
import {Link} from "react-router-dom";
import CountUnreadMessages from "../Components/CountUnreadMessages";
import Cookies from "js-cookie";
let size = "12%"


function LeftMenu () {
    let unreadMessages = 0
    let strUnreadMessages = ""
    const user_id = Cookies.get("user_id");

    const myStyles = {
        fontSize: "16px",
        border: "1px solid #9ba3b5",
        backgroundColor: "#6179a0",
        margin: "auto",
        borderRadius: "8px",
    };


    {/*fontSize: "16px",
    padding: "0px",
    borderStyle: "solid",
    borderRadius: "18% 18%",*/}

    if (user_id) {
        unreadMessages = CountUnreadMessages(user_id)
    }

    return (
        <div className="left_menu">
            <div className="left_menu_block">
                <Link to="/profile"><p><img width={size} alt="Profile Logo" src={profile}/>
                    Profile</p></Link>
                <p><Link to="/friends"><img width={size} alt="Profile Logo" src={friends}/>
                    Friends</Link></p>
                <p><Link to="/chats"><img width={size} alt="Profile Logo" src={message}/>
                    Messages { unreadMessages !== 0 ? <span style={myStyles}>&nbsp;+{unreadMessages}&nbsp;</span> : ""}</Link></p>
                <p><Link to="/news"><img width={size} alt="Profile Logo" src={posts}/>
                    News</Link></p>
                <p><img width={size} alt="Profile Logo" src={music}/>
                    Music</p>
                <p><img width={size} alt="Profile Logo" src={video}/>
                    Videos</p>
                <p><img width={size} alt="Profile Logo" src={photo}/>
                    Photo</p>
            </div>
        </div>
    )
}

export default LeftMenu;