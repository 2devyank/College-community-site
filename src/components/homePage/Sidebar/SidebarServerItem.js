export default function SidebarServerItem(props) {

    return (
        <div className="sidebar-server-container m-2">
            <img className="sidebar-server-logo" src={props.server.serverLogoUrl} alt="" />
        </div>
    )
}