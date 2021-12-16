import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <div className="LandingPage">
            <h2>This is Landing Page</h2>
            <Link to="/home">Go to HomePage</Link>
        </div>
    )
}

export default LandingPage
