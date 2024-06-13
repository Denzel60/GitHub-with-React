import './Header.css'

function Header() {
    return (
        <div>
            <section className="header">
                <h1>GitHub Finder</h1>
                <a href="">By Denzel Lawrence</a>
                <form className="search">
                    <input type="text" placeholder='Enter a username' />
                    <button type='button'>Search</button>
                </form>
            </section>
        </div>
    )
}

export default Header