import './Repositories.css'
import { FaCodeFork } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";

function Repositories() {
    return (
        <div className='repo-section'>

            <h1 className='repo-heading'>Repositories</h1>

            <section className="repositories">
                <section className="repos">
                    <div className="title">
                        <h3>Repository Name</h3>
                        <p>Repository Description</p>
                    </div>

                    <div className="forks">
                        <p>< FaCodeFork /></p>
                        <p>< FaStar /></p>
                    </div>
                </section>

            </section>

            <section className="follow">
                <h1>Followers</h1>
            </section>

            <div className="followers-cont">
                <div className="follow">
                    <img src="" alt="" />
                    <h3>Name</h3>
                    <p> < IoLinkSharp /> link</p>
                </div>

            </div>

        </div>
    )
}

export default Repositories