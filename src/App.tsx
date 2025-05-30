
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import Login from "./pages/login.tsx";
import Dashboard from "./pages/DashBoard.tsx";
import Customer from "./pages/Customer.tsx";
import Stock from "./pages/stock.tsx";



const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-white-500 to-gray-900 text-white p-4">
                {/* Main container with glassmorphism effect */}
                <div className="max-w-7xl mx-auto backdrop-blur-lg bg-white/5 rounded-3xl shadow-2xl overflow-hidden border border-white/10">
                    <Navbar />

                    {/* Content area with subtle animation */}
                    <div className="p-6 md:p-8 transition-all duration-300">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/customer" element={<Customer />} />
                            <Route path="/stock" element={<Stock />} />


                        </Routes>
                    </div>

                    {/* Footer */}
                    <footer className="p-4 text-center text-sm text-white/70 border-t border-white/10">
                        © {new Date().getFullYear()} Ayesha | Full Stack Developer
                    </footer>
                </div>
            </div>
        </Router>

    );
};

export default App;