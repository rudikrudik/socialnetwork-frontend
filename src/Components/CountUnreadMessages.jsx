import '../config';
import fetcherPost from "./FetcherPOST";
import useSWR from "swr";

function CountUnreadMessages(props) {
    let count = 0

    const {
        data: dataUnreadCount,
        isLoading: dataUnreadCountIsLoading,
        error: dataUnreadCountError
    } = useSWR([`${global.config.urls.unreadMessagesUrl}/get/unredmessages/${props}`],
        ([url]) => fetcherPost(url));

    if (dataUnreadCountIsLoading || dataUnreadCountError) {
        return false;
    }

    if (dataUnreadCount) {
        Object.entries(dataUnreadCount).map(([key, value]) => (
            count += parseInt(value)))
    } else
        return false;

    return count
}

export default CountUnreadMessages
