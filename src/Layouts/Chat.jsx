import '../config';
import useSWR from "swr";
import fetcherGet from "../Components/FetcherGET";
import profile_img from "../images/profile/6.jpg"
import GetLastMessages from "../Components/GetLastMessages";

function Chat(props) {
    let lastMes = ""
    const userDialog = props.data.split(':');

    const {
        data: userData,
        isLoading: userIsLoading,
        error: userError
    } = useSWR([`${global.config.urls.baseUrl}/user/get/?id_user=${userDialog[2]}`],
        ([url]) => fetcherGet(url));

    const to_user = userDialog[1];
    const from_user = userDialog[2];

    let lastMessages = GetLastMessages({to_user, from_user});

    if (userIsLoading) return <div>is loading</div>;
    if (userError) return <div>is error</div>;

    if (lastMessages[0].message === undefined) {
        lastMes = "Hello world"
    } else {
        lastMes = lastMessages[0].message;
    }

    return (
        <div className="chats">
                <div className="chats_author_menu_wrapper">
                    <div className="chats_author">
                    <img alt="avatar" src={profile_img} />
                    <p>{userData.first_name} {userData.last_name}</p>
                    </div>
                    <div className="chats_message_date">
                        <p>June 25, 2025 at 18:41</p>
                    </div>
                </div>
                <div className="chats_message">
                    <p>{lastMes}</p>
                </div>
                {/*<div className="friend_edit_menu">
                   { props.data[0] ? "" : <FriendAdd friend_id={props.data[1]}/>}
                   <FriendRemove friend_id={props.data[1]}/>
               </div>*/}
        </div>
    )
}

export default Chat;