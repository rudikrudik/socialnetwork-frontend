import React from "react";
import '../config';
import useSWR from "swr";
import fetcherGet from "../Components/FetcherGET";
import Chat from "./Chat";
import Cookies from "js-cookie";


function Chats() {
    const user_id = Cookies.get("user_id");

    const {
        data: chatsData,
        isLoading: chatsIsLoading,
        error: chatsError,
    } = useSWR([`${global.config.urls.dialogsUrl}/dialog/${user_id}/list`],
        ([url]) => fetcherGet(url));

    if (chatsIsLoading) { return "Loading..."; }
    if (chatsError) { return "Error..."; }

    return (
        <div className="main">
            {chatsData.map((item) => {
                return <Chat key={item} data={item}/>
            })}
        </div>
    )
}

export default Chats;