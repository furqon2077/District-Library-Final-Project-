import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import LoanService from "./pages/LoanService";
import Navbar from "./components/Navbar";
import "./styles/main.scss";

function App() {
    return (
        <BrowserRouter>
            {/*<Navbar />*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/loanservice" element={<LoanService />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
