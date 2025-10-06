import '../config';
import fetcherPost from "./FetcherPOST";
import useSWR from "swr";
import {useEffect, useState} from "react";

function GetLastMessages(props) {
    const {
        data: lastMessageData,
        isLoading: lastMessageIsLoading,
        error: lastMessageError
    } = useSWR([`${global.config.urls.dialogsUrl}/dialog/${props.from_user}/get/${props.to_user}`],
        ([url]) => fetcherPost(url));

    if (lastMessageIsLoading) return <div>is loading last message</div>
    if (lastMessageError) return <div>error</div>;

    return lastMessageData;
}

export default GetLastMessages;
