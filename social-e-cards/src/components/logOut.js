import 'bulma/css/bulma.min.css';
import { useNavigate } from "react-router-dom"



function LogOut({ baseURL, setState }) {
    const returnHome = useNavigate();
    const handleLogOut = () => {
        localStorage.clear();
        setTimeout(() => {
            returnHome("/");
        }, 1000);
    }

    return (
        <>
            <button id='logout' className='nav' type="submit" onClick={(event) => handleLogOut(event)}> {""} Log Out</button>
        </>
    );
}

export default LogOut