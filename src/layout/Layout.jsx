import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/localStorage";


export const Layout = (props) => {
    const navigate = useNavigate() 
    const [isLoggedIn, setIsloggedIn] = useLocalStorage('login', false);
    useEffect(() => {
        !isLoggedIn && navigate('/login');
    }, [])
    const logout = () => {
        setIsloggedIn(false);
        navigate('/login');
    }
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/luas-segitiga">Luas Segitiga</Link>
                <Link to="/luas-lingkaran">Luas Lingkaran</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/counter-two-number">Counter two number</Link>
                <Link to="/form-text">Form text</Link>
                <Link to="/nilai">Nilai</Link>
                <button onClick={logout}>Logout</button>
            </div>
            { props.children }
        </div>
    )
}