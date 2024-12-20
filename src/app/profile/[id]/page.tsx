"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { use } from "react"
import toast from "react-hot-toast"


export default function UserProfile({params}:any){
    const router = useRouter()
    const unwrappedParams:any = use(params);
    const logout = async () => {
        try {
            await axios.get("/api/users/logout")
             toast.success("Logout successful")
             router.push("/login")
        } catch (error :any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }
    
    return (
        <div>
            <h1>Profile</h1>
            <p>profile page {unwrappedParams.id}</p>
            <hr />
            <button onClick={logout} className="bg-blue-500 hover:bg-blue-300 text-white">Logout</button>
        </div>
    )
}