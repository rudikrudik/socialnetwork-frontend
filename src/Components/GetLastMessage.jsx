import '../config';
import fetcherGet from "./FetcherGET";
import useSWR from "swr";

function GetLastMessage(props) {
    const {
        data: lastMessageData,
        isLoading: lastMessageIsLoading,
        error: lastMessageError
    } = useSWR([`${global.config.urls.dialogsUrl}/dialog/lastmessage/${props.fromUser}/get/${props.toUser}`],
        ([url]) => fetcherGet(url));

    if (lastMessageIsLoading) return <div>is loading last message</div>
    if (lastMessageError) return <div>error</div>;

    return lastMessageData;
}

export default GetLastMessage;
