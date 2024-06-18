import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineExport } from "react-icons/ai";
import useUsernameStore from '../../Store.jsx/userNameStore';
import './Profile.css';

function Profile() {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    const [load, setLoad] = useState(false);

    const username = useUsernameStore(state => state.username);

    useEffect(() => {
        if (username) {
            const fetchProfile = async () => {
                try {
                    setLoad(true);
                    const response = await fetch(`https://api.github.com/users/${username}`);
                    const result = await response.json();
                    setProfile(result);
                } catch (error) {
                    console.error("There was an error", error);
                    setError(error.message);
                } finally {
                    setLoad(false);
                }
            };

            fetchProfile();
        }
    }, [username]);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <section className='profile'>
                <img src={profile.avatar_url} alt={profile.name} key={profile.id} />
                <h2>{profile.name}</h2>
                {error && <h1>{error}</h1>}
                {load && <HashLoader color="#070F2B" />}
                <h3>{profile.login}</h3>
                <p>{profile.company}</p>
                <p>{profile.bio}</p>
                <button>
                    <AiOutlineExport />
                    <a href={profile.html_url} target='blank'>View on GitHub</a>
                </button>
                <h5><IoLocationOutline />{profile.location}</h5>
                <h5><RiGitRepositoryFill /> {profile.public_repos} Repositories</h5>
                <h5><BsPeopleFill /> {profile.followers} followers</h5>
                <h5><BsPeopleFill /> {profile.following} following</h5>
            </section>
        </div>
    );
}

export default Profile;
