import React from "react";
import '../config';
import useSWR from "swr";
import fetcherGet from "../Components/FetcherGET";
import fetcherPost from "../Components/FetcherPOST";
import Chat from "./Chat";
import Cookies from "js-cookie";
import CountUnreadMessages from "../Components/CountUnreadMessages";


function Chats() {
    const user_id = Cookies.get("user_id");

    const {data: dataA} = useSWR([`${global.config.urls.dialogsUrl}/dialog/${user_id}/list`],
        ([url]) => fetcherGet(url));

    let dataB = CountUnreadMessages()

    console.log("Unread MessagesA", dataA)
    console.log("Unread MessagesB", dataB)

    return (
        <div className="main">
            {/*data.map((item) => {
                return <Chat key={item[1]} data={item}/>
            })*/}
        </div>
    )
}

export default Chats;