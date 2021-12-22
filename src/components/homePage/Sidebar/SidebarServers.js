import React, { useState, useEffect } from 'react'
import SidebarServerItem from "./SidebarServerItem"

export default function SidebarServers() {
    const [serverList, setServerList] = useState(
        [
            {
                serverName:"ADGITM",
                serverLogoUrl:"https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg"
            }
        ]
    );

    useEffect(() => {
        console.log("Reload");
    }, []);

    function addNewServerList() {
        setServerList(serverList => [...serverList, {
            serverName:"ADGITM New",
            serverLogoUrl:"https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg"
        }]);
    }

    return (
        <div className="sidebar-servers-container scrollable-container">
            {serverList.map((server, serverIndex) => { return <SidebarServerItem server={server} />; })}
            <button className="btn btn-secondary m-1 fw-bold" onClick={addNewServerList}>+</button>
        </div>
    )
}