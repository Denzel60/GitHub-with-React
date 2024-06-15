import './Header.css'
import { useState } from 'react'
import useUsernameStore from '../../Store.jsx/userNameStore';

function Header() {
    const captureUsername = useUsernameStore((state) => state.captureUsername)
    const username = useUsernameStore(state => state.username)
    const [uname, setUsername] = useState()

    const handleUsername = e => {
        setUsername(e.target.value);
    }

    const handleSearch = e => {
        e.preventDefault();
        console.log(username)
        captureUsername(uname)
    }

    return (
        <div>
            <section className="header">
                <h1>GitHub Finder</h1>
                <a href="">By Denzel Lawrence</a>
                <form className="search">
                    <input type="text" placeholder='Enter a username' onChange={handleUsername} />
                    <button type='button' onClick={handleSearch}>Search</button>
                </form>
            </section>
        </div>
    )
}

export default Header