import React from "react";
import '../config';
import fetcherPost from "./FetcherPOST";
import useSWR from "swr";

function CountUnreadMessages() {
    let count = 0

    const {data: dataB} = useSWR([`${global.config.urls.unreadMessagesUrl}/get/unredmessages/3`],
        ([url]) => fetcherPost(url));

    return dataB
}

export default CountUnreadMessages
