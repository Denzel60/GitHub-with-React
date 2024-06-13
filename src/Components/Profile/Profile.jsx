import './Profile.css'
import { IoLocationOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineExport } from "react-icons/ai";
import gitHubImg from "../../assets/github.png"

function Profile() {
    return (
        <div>
            <section className='profile'>
                <img src={gitHubImg} alt="" />
                <h2>Andrew Carter</h2>
                <p>Job Title</p>
                <button>< AiOutlineExport /> View on GitHub</button>
                <h5>< IoLocationOutline /></h5>
                <h5>< FaBuilding /></h5>
                <h5>< RiGitRepositoryFill /> Repositories</h5>
                <h5>< BsPeopleFill /> followers</h5>
                <h5>< BsPeopleFill /> following</h5>
            </section>
        </div>
    )
}

export default Profile