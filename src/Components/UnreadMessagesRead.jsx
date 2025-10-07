import '../config';
import fetcherPost from "./FetcherPOST";
import useSWRMutation from "swr/mutation";

function UnreadMessagesRead(props) {
    const {
        trigger
    } = useSWRMutation([`${global.config.urls.unreadMessagesUrl}/readmessages/${props.fromUser}/${props.toUser}`],
        ([url]) => fetcherPost(url));

    const readMessages = async () => {
        let result = await trigger()
        console.log("Delete Result", result)
        if (!result) {
            window.location.reload();
        }
    };

    return (
        <div>
            <button className="post_menu_button_delete" onClick={readMessages}>{props.unreadMessagesCount}</button>
        </div>
    )

}

export default UnreadMessagesRead;