import '../../styles/memberSection.css'

function MemberItem({ member }) {
    return (
        <div className='MemberItem container d-flex align-items-center py-2'>
            <img src={member.imageUrl} alt="" />
            <div>{member.name}</div>
        </div>
    )
}

export default MemberItem
