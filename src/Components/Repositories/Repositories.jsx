import './Repositories.css'
import { FaCodeFork } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import useUsernameStore from '../../Store.jsx/userNameStore';
import { useState } from 'react';

function Repositories() {
    const [repositories, setRepositories] = useState([]);
    const [follows, setfollows] = useState([]);
    const [following, setfollowing] = useState([]);

    const username = useUsernameStore(state => state.username)

    console.log(`The username is ${username} from repos`)

    if (username != null) {
        (
            async () => {
                try {
                    const set_url = `https://api.github.com/users/${username}/repos`;
                    const data = await fetch(set_url);
                    const json = await data.json();
                    setRepositories(json);
                } catch (error) {
                    console.log("There was an error");
                }
            }
        )();
    } else {
        console.log("Username is null")
    }


    if (username != null) {
        (
            async () => {
                try {
                    const fetch_url = `https://api.github.com/users/${username}/followers`
                    const output = await fetch(fetch_url);
                    const display = await output.json();
                    setfollows(display)

                } catch (error) {
                    console.log("There was an error fetching the followers")
                }
            }
        )();
    }


    if (username != null) {
        (
            async () => {
                try {
                    const fetch_url = `https://api.github.com/users/${username}/following`
                    const output = await fetch(fetch_url);
                    const display = await output.json();
                    setfollowing(display)

                } catch (error) {
                    console.log("There was an error fetching the followers")
                }
            }
        )();
    }


    return (
        <div className='repo-section'>

            <h1 className='repo-heading'>Repositories</h1>

            <section className="repositories">
                {repositories.map(repo => (
                    <section className="repos" key={repo.id}>
                        <div className="title">
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                        </div>

                        <div className="forks">
                            <p><FaCodeFork />{repo.forks_count} forks</p>
                            <p><FaStar />{repo.stargazers_count} stars</p>
                        </div>
                    </section>
                ))}
            </section>

            <section className="follow">
                <h1>Followers</h1>
            </section>

            <div className="followers-cont">
                {follows.map(follow => (
                    <div className="followers" key={follow.id}>
                        <img src={follow.avatar_url} alt="" />
                        <h3>{follow.login}</h3>
                        <p><a href={follow.html_url} target="blank" >< IoLinkSharp /> link</a></p>
                    </div>))}
            </div>

            <section className="follow">
                <h1>Following</h1>
            </section>

            <div className="followers-cont">
                {following.map(follow => (
                    <div className="followers" key={follow.id}>
                        <img src={follow.avatar_url} alt="" />
                        <h3>{follow.login}</h3>
                        <p><a href={follow.html_url} target="blank" >< IoLinkSharp /> link</a></p>
                    </div>))}
            </div>

        </div >
    )
}

export default Repositories