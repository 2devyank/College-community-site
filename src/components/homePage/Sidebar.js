import SidebarServers from "./Sidebar/SidebarServers"
import SidebarChannels from "./Sidebar/SidebarChannels"
import '../../styles/sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-inner-container">
                <SidebarServers />
                <SidebarChannels />
            </div>
        </div>
    )
}

export default Sidebar