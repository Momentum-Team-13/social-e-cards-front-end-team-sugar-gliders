
import { useNavigate } from "react-router-dom"


function LogOut({ baseURL }) {
    const returnHome = useNavigate();
    const handleLogOut = () => {
        localStorage.clear();
        returnHome({ baseURL });
    }

    return (
        <>
            <button type="submit" onClick={(event) => handleLogOut(event)}> {""} Log Out</button>
        </>
    );
}

export default LogOut