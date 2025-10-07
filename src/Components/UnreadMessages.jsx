import '../config';
import fetcherPost from "./FetcherPOST";
import useSWR from "swr";

function UnreadMessages(props) {
    const {
        data: dataUnreadMessages,
        isLoading: dataUnreadMessagesIsLoading,
        error: dataUnreadMessagesError
    } = useSWR([`${global.config.urls.unreadMessagesUrl}/get/unreadmessages/${props}`],
        ([url]) => fetcherPost(url));

    if (dataUnreadMessagesIsLoading || dataUnreadMessagesError) {
        return false;
    }

    return dataUnreadMessages
}

export default UnreadMessages;
