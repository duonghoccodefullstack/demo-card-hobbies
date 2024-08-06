import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Layout from './Component/Layout/Layout.jsx'
import Home from './component/Home/index'
import PaginatedGrid from './component/Pagination/test';
import Test from './Mind X/lesson 5';
// import About from './Component/Layout/About/about.jsx'
// import Contact from './Component/Layout/Contact/contact.jsx';
// import Login from './Component/Layout/Dasboard/Login.jsx';
// import Otp from './Component/Layout/Dasboard/OtpLog.jsx';
// import { ClerkProvider } from '@clerk/clerk-react'
// import SignUp from './Component/Layout/Dasboard/Signup';
// import TicketBooking from './Component/Product/booking/ticket';
// import TestVeryOtp from './Component/Layout/Dasboard/otpveroy';
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// if (!PUBLISHABLE_KEY) {
//     throw new Error("Missing Publishable Key")
// }
// import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}

            <Router>
                {/* <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav> */}

                <Routes>
                    {/* <Route path="/" element={<Layout />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    {/* <Route path="/" element={<PaginatedGrid />} /> */}
                    {/* <Route path="/login" element={<Login />} />
                    <Route path="/loginotp" element={<Otp />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/ticket" element={<TicketBooking />} />
                    <Route path="/testvery" element={<TestVeryOtp/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>

            </Router>

        {/* </ClerkProvider> */}
    </React.StrictMode>,
)
