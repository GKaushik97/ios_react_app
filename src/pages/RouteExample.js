import { Link, Outlet } from "react-router-dom";

export default function RouteExample() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}