import { Link } from "react-router-dom"
import MembersSection from "../components/MembersSection"
import MessageSection from "../components/MessageSection"
import NotificationSection from "../components/NotificationSection"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

function HomePage() {
    return (
        <div className="HomePage">

            <Topbar />
            <div className="mainSection_homePage">
                <Sidebar />
                <MessageSection />
                <div className="rightSection_homePage">
                    <NotificationSection />
                    <MembersSection />
                </div>
            </div>

        </div>
    )
}

export default HomePage
