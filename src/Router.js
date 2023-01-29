import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Error from "./pages/Error";
import Home from "./pages/Home";


export default function RouterPath() {
    return (
        <div className="path">
            <Router>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route exact path="kasa/" element={<Home />} />
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="accommodations/:id" element={<Accommodation />} />
                        <Route exact path="about" element={<About />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
            </Router>
            <Footer />
        </div>
    )
}