import React from "react";
import '../config';
import fetcherPost from "./FetcherPOST";
import useSWR from "swr";

function GetLastMessages(props) {
    const {
        data: lastMessageData,
        isLoading: lastMessageIsLoading,
        error: lastMessageError
    } = useSWR([`${global.config.urls.unreadMessagesUrl}/get/unredmessages/${props}`],
        ([url]) => fetcherPost(url));

    if (lastMessageIsLoading) return <div>is loading</div>;
    if (lastMessageError) return <div>is error</div>;


    if (lastMessageData) {
        return lastMessageData;
    }
}

export default GetLastMessages;
