import MemberItem from "./MemberItem"
import '../../styles/memberSection.css'

function MembersSection() {

    const memberList = [
        {
            name: "John Harris",
            imageUrl: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        },
        {
            name: "Henry Doe",
            imageUrl: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        },
        {
            name: "Rajib Mondal",
            imageUrl: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        },
        {
            name: "Simran",
            imageUrl: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        },
        {
            name: "Uday Bhaiya",
            imageUrl: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        },
        {
            name: "John Harris",
            imageUrl: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        },
        {
            name: "John Harris",
            imageUrl: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        },
        {
            name: "Nikunj Bhaiya",
            imageUrl: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        },
        {
            name: "John Harris",
            imageUrl: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        },
        {
            name: "John Harris",
            imageUrl: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        },
    ]

    return (
        <div className="MembersSection container scrollable-container">
            <div className='heading sticky-top'>MEMBERS</div>
            {
                memberList.map((member, index) => {
                    return <MemberItem member={member} key={index} />
                })
            }
        </div>
    )
}

export default MembersSection
