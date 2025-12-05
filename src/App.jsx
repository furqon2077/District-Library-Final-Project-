import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import LoanService from "./pages/LoanService";
import "./styles/main.scss";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/loanservice" element={<LoanService />} />
            </Routes>
        </>
    );
}

export default App;
