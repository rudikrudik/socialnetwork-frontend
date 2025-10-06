import React from "react";
import '../config';
import useSWR from "swr";
import fetcherGet from "../Components/FetcherGET";
import profile_img from "../images/profile/6.jpg"
import FriendAdd from "../Components/FriendAdd";
import FriendRemove from "../Components/FriendRemove";
import GetLastMessages from "../Components/GetLastMessages";


function Chat(props) {
    const userDialog = props.data.split(':');

    const {
        data,
        isLoading,
        error
    } = useSWR([`${global.config.urls.baseUrl}/user/get/?id_user=${userDialog[2]}`],
        ([url]) => fetcherGet(url));

    if (isLoading) return <div>is loading</div>;
    if (error) return <div>is error</div>;

    let getLastMessage = GetLastMessages(userDialog[1])

    return (
        <div className="friend">
            <div className="friend_wrapper">
                <div className="friend_author">
                    <img alt="avatar" src={profile_img} />
                    <p>{data.first_name} {data.last_name}</p>
                    {/*<p>{getLastMessage}</p>*/}
                </div>
                <div className="friend_edit_menu">
                    { props.data[0] ? "" : <FriendAdd friend_id={props.data[1]}/>}
                    <FriendRemove friend_id={props.data[1]}/>
                </div>
            </div>
        </div>
    )
}

export default Chat;