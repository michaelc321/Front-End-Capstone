import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { Main } from "./Main"
// import "./Mains.css"

export const UserList = () => {

    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    
    return (
        <div className="users">
        {
            users.map(user => <Main key={user.id} user={user} />)
        }
        </div>
    )
}