import '../config';
import useSWR from "swr";
import fetcherGet from "../Components/FetcherGET";
import profile_img from "../images/profile/6.jpg"
import GetLastMessage from "../Components/GetLastMessage";
import FriendAdd from "../Components/FriendAdd";
import FriendRemove from "../Components/FriendRemove";
import React from "react";
import UnreadMessagesRead from "../Components/UnreadMessagesRead";

function Chat(props) {
    let lastMes = ""

    const {
        data: userData,
        isLoading: userIsLoading,
        error: userError
    } = useSWR([`${global.config.urls.baseUrl}/user/get/?id_user=${props.fromUser}`],
        ([url]) => fetcherGet(url));

    let lastMessage = GetLastMessage(props);

    if (userIsLoading) return <div>is loading</div>;
    if (userError) return <div>is error</div>;

    if (lastMessage?.message === undefined) {
        lastMes = "Hello world"
    } else {
        lastMes = lastMessage?.message;
    }

    return (
        <div className="chats">
            <div className="chats_author_menu_wrapper">
                <div className="chats_author">
                    <img alt="avatar" src={profile_img} />
                    <p>{userData.first_name} {userData.last_name}</p>
                </div>
                <div className="chats_edit_menu">
                    { props.unreadMessages === "0" ? "" : <UnreadMessagesRead
                        fromUser={props.fromUser}
                        toUser={props.toUser}
                        unreadMessagesCount={props.unreadMessages}
                    />}
                </div>
                <div className="chats_message_date">
                    <p>{lastMessage.date}</p>
                </div>
            </div>
            <div className="chats_message">
                <p>{lastMes}</p>
            </div>
        </div>
    )
}

export default Chat;