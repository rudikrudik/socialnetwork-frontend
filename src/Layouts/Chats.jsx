import React from "react";
import '../config';
import useSWR from "swr";
import fetcherGet from "../Components/FetcherGET";
import Chat from "./Chat";
import Cookies from "js-cookie";
import UnreadMessages from "../Components/UnreadMessages";


function Chats() {
    const user_id = Cookies.get("user_id");

    const {
        data: chatsData,
        isLoading: chatsIsLoading,
        error: chatsError,
    } = useSWR([`${global.config.urls.dialogsUrl}/dialog/${user_id}/list`],
        ([url]) => fetcherGet(url));

    let unreadMessagesList = UnreadMessages(user_id)

    if (chatsIsLoading) { return "Loading..."; }
    if (chatsError) { return "Error..."; }

    return (
        <div className="main">
            {chatsData.map((item) => {
                let strSplit = item.split(":")
                let toUser = strSplit[1]
                let fromUser = strSplit[2]
                let unreadMessages = "0"

                if (unreadMessagesList[strSplit[2]]) {
                    unreadMessages = unreadMessagesList[strSplit[2]]
                }

                return <Chat key={item} toUser={toUser} fromUser={fromUser} unreadMessages={unreadMessages} />
            })}
        </div>
    )
}

export default Chats;