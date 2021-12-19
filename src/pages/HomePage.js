import { Link } from "react-router-dom"
import MembersSection from "../components/homePage/MembersSection"
import MessageSection from "../components/homePage/MessageSection"
import NotificationSection from "../components/homePage/NotificationSection"
import Sidebar from "../components/homePage/Sidebar"
import Topbar from "../components/homePage/Topbar"

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
