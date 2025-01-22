import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import RouteExample from "./RouteExample";
import Project from "../Project";
export default function Layout() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RouteExample />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={ <Blogs />} />
                        <Route path="projects" element={ <Project />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
        
    )
}