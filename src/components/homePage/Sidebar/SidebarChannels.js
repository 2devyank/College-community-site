import React, { useState, useEffect } from 'react'
import SidebarCategoryItem from "./SidebarCategoryItem"

export default function SidebarChannels() {
    const [categoryList, setCategoryList] = useState(
        [
            {
                categoryName:"Main",
                categoryChannels:[
                    {
                        channelName:"Official | Class Links"
                    },
                    {
                        channelName:"Announcements"
                    },
                    {
                        channelName:"Resources"
                    }
                ]
            },
            {
                categoryName:"Unofficial",
                categoryChannels:[
                    {
                        channelName:"Banter"
                    },
                    {
                        channelName:"Announcements"
                    },
                    {
                        channelName:"Resources"
                    },
                    {
                        channelName:"Bunk Schedule"
                    }
                ]
            },
            {
                categoryName:"Main",
                categoryChannels:[
                    {
                        channelName:"Official | Class Links"
                    },
                    {
                        channelName:"Announcements"
                    },
                    {
                        channelName:"Resources"
                    }
                ]
            },
            {
                categoryName:"Unofficial",
                categoryChannels:[
                    {
                        channelName:"Banter"
                    },
                    {
                        channelName:"Announcements"
                    },
                    {
                        channelName:"Resources"
                    },
                    {
                        channelName:"Bunk Schedule"
                    }
                ]
            },

        ]
    );

    return (
        <div className="sidebar-channels-container container scrollable-container">
            <div className='heading sticky-top bg-dark'>ADGITM</div>
            {categoryList.map((category, categoryIndex) => { return <SidebarCategoryItem category={category} />; })}
        </div>
    )
}