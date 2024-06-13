import React from "react"
import Header from "../Components/Header/Header"
import Profile from "../Components/Profile/Profile"
import Repositories from "../Components/Repositories/Repositories"
import './Home.css'

function Home() {
    return (
        <React.Fragment>
            < Header />
            < Profile />
            <div className="repo-users">
                < Repositories />
            </div>
        </React.Fragment>
    )
}

export default Home