import Login from "../components/authorize/Login"
import Register from "../components/authorize/Register"
import { Link } from "react-router-dom"

function Authorize() {
    return (
        <div className="Authorize">
            <h2>This is Authentication Page</h2>
            <Login />
            <Register />
        </div>
    )
}

export default Authorize
