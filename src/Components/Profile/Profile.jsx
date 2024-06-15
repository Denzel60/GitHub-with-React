import './Profile.css'
import { IoLocationOutline } from "react-icons/io5";
// import { FaBuilding } from "react-icons/fa6";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineExport } from "react-icons/ai";
// import gitHubImg from "../../assets/github.png"
import useUsernameStore from '../../Store.jsx/userNameStore';
import { useState } from 'react';

function Profile() {
    const [img, setImg] = useState(null)
    const [login, setLogin] = useState(null)
    const [company, setCompany] = useState(null)
    const [url, setUrl] = useState(null)
    const [location, setLocation] = useState(null)
    const [repos, setRepos] = useState(null)
    const [followers, setfollowers] = useState(null)
    const [following, setFollowing] = useState(null)

    // const captureUsername = useUsernameStore(state => state.captureUsername)
    const username = useUsernameStore(state => state.username)
    console.log(`From the profile, the usernme is ${username}`)

    if (username != null) {
        (async () => {
            try {
                const api_url = `https://api.github.com/users/${username}`;
                const response = await fetch(api_url)
                const result = await response.json();
                // console.log(result)

                setImg(result.avatar_url)
                setLogin(result.login)
                setCompany(result.company)
                setUrl(result.html_url)
                setLocation(result.location)
                setRepos(result.repos)
                setfollowers(result.followers)
                setFollowing(result.following)
            } catch (error) {
                console.log("There was an error")
            }
        })();
    } else {
        alert("Please enter username")
    }


    console.log(username)
    return (
        <div>
            <section className='profile'>
                <img src={img} alt="" />
                <h2>{login}</h2>
                <p>{company}</p>
                <button>< AiOutlineExport /> <a href={url} target='blank'>View on GitHub</a> </button>
                <h5>< IoLocationOutline />{location}</h5>
                <h5>< RiGitRepositoryFill /> {repos} Repositories </h5>
                <h5>< BsPeopleFill /> {followers} followers</h5>
                <h5>< BsPeopleFill /> {following} following</h5>
            </section>
        </div>
    )
}

export default Profile