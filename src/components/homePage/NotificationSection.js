import '../../styles/notificationSection.css'
import EventItem from './EventItem'

function NotificationSection() {

    const eventList = [
        {
            serverName: "ADGITM College",
            imageURL: "https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg",
            userName: "Rajib Mondal",
            date: "20/12/2021",
            time: "8:50 pm",
            message: "lorem23Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar Quisque velit nisi, pretium ut lacinia in, elementum id enim.Proin eget tortor risus.",
            link: "https://www.youtube.com/watch?v=PKwu15ldZ7k&t=1959s"
        },
        {
            serverName: "ADGITM College",
            imageURL: "https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg",
            userName: "Ayush Verma",
            date: "20/12/2021",
            time: "8:50 pm",
            message: "lorem23Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh psnhfhjds smnfsjkad jfhjds jdhvjdsnd vvjdhgdsv dsnvbdjk dvndsbkjdnv dsv dsjkvdb vdvdjkbvdmdmnvbdska vm jkulvinar Quisque velit nisi, pretium ut lacinia in, elementum id enim.Proin eget tortor risus.",
            link: "https://www.youtube.com/watch?v=PKwu15ldZ7k&t=1959s"
        },
        {
            serverName: "ADGITM College",
            imageURL: "https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg",
            userName: "Devyank",
            date: "20/12/2021",
            time: "8:50 pm",
            message: "lorem23Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tin pulvinar Quisque velit nisi, pretium ut lacinia in, elementum id enim.Proin eget tortor risus.",
            link: "https://www.youtube.com/watch?v=PKwu15ldZ7k&t=1959s"
        }
    ]

    return (
        <div className="NotificationSection container">
            <div className='heading sticky-top'>EVENTS</div>
            {
                eventList.map((event, index) => {
                    return <EventItem event={event} key={index} />
                })
            }
        </div>
    )
}

export default NotificationSection
