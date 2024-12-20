"use client"

import axios from "axios";
import Link from "next/link";
import { use, useState } from "react";

export default function UserProfile({params}:any){
    const unwrappedParams = use(params);
    const [user, setUser] = useState("nothing")

    const getUSerDetails = async () =>{
        const res = await axios.get("/api/users/me") 
        console.log("response, user", res.data)
        setUser(res.data.userDetails._id)

    }
    return (
        <div>
            <h1>Profile</h1>
            <p>profile page</p>
            <h2>{user==='nothing' ? "no user" : <Link href={`/profile/${user}`} >{user}</Link>}</h2>
            <button onClick={getUSerDetails}>Get user details</button>
        </div>
    )
}