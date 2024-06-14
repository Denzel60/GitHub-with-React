import './Header.css'
import { useState } from 'react'

function Header() {
    // const [username, setUsername] = useState(null)
    const [name, setName] = useState(null);

    const handleUsername = e => {
        setName(e.target.value)
    }

    const handleSearch = () => {
        // const api_url = "https://api.github.com/users/{username}"
        // const response = await fetch(api_url);
        // const result = await response.json();
        // console.log(result);

        console.log(name)
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