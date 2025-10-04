import React from "react";
import '../config';
import useSWR from "swr";
import fetcherGet from "../Components/FetcherGET";
import Friend from "./Friend";
import Cookies from "js-cookie";


function Chats() {
    const {
        data,
        isLoading,
        error
    } = useSWR([`${global.config.urls.dialogsUrl}/dialog/${Cookies.get("user_id")}/list`],
        ([url]) => fetcherGet(url));

    if (isLoading) return <div>is loading</div>;
    if (error) {
        return <div>is error</div>;
    }

    console.log("Data", data)

    return (
        <div className="main">
            {/*data.map((item) => {
                return <Friend key={item[1]} data={item}/>
            })*/}
        </div>
    )
}

export default Chats;