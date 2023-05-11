import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Logo from "../images/logo.png"

export default function Navbar(){
    

    return(
        <nav className="nav">
            <Link to="/" className="site-title">
                <img src={Logo} alt="Rechner" id="logo"/>
            </Link>
            <ul>

                <CustomLink to="/pricing">Pricing</CustomLink>
                <CustomLink to="/imprint">Impressum</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <>
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
        </>
    )
}