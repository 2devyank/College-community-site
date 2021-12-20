import '../../styles/notificationSection.css'

function EventItem({ event }) {
    return (
        <div className="EventItem container p-2 my-3">
            <div className="fs-5 d-flex justify-content-start align-items-center">
                <img style={{ width: "24px", marginRight: "10px", borderRadius: "50%" }} src={event.imageURL} alt="" />
                <div>{event.serverName}</div>
            </div>
            <div className='d-flex justify-content-between opacity-50'>
                <div>{event.userName}</div>
                <div>{event.date}</div>
            </div>
            <div className='py-2'>{event.message}</div>
            <a className='text-decoration-none' style={{ color: "#bf97ff" }} href="https://www.youtube.com/watch?v=PKwu15ldZ7k&t=1959s" target="_blank">https://www.youtube.com/watch?v=PKwu15ldZ7k&t=1959s</a>
        </div>
    )
}

export default EventItem
