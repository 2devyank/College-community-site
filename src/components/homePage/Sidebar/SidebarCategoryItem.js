import SidebarChannelItem from "./SidebarChannelItem"

export default function SidebarCategoryItem(props) {

    return (
        <div className="sidebar-category-container mt-2 mb-3">
            <span className="fw-bold">{props.category.categoryName}</span>
            <hr/>
            {props.category.categoryChannels.map((channel, channelIndex) => { return <SidebarChannelItem channel={channel} />; })}
        </div>
    )
}