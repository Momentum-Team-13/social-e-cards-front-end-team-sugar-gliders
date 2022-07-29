
import { useNavigate } from "react-router-dom"


function LogOut() {
    const returnHome = useNavigate();
    const handleLogOut = () => {
        localStorage.clear();
        returnHome("/home/");
    }

    return (
        <>
            <button type="submit" onClick={(event) => handleLogOut(event)}> {""} Log Out</button>
        </>
    );
}

export default LogOut