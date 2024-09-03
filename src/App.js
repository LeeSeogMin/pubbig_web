import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Event from './component/Event/Event';
import Home from './component/Hero/Home';
import Major from './component/Major/Major';
import Lab from './component/Lab/Lab';
import Prof from './component/Prof/Prof';
import Capston from './component/Capston/Capston';
import Contact from './component/Contact/Contact';
import Academy from './component/Academy/Academy';
import './App.css';
import Footer from './component/Footer';

function App() {
    return (
        <div className="App">
            <div className="container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/component/Major/Major"
                        element={<Major />}
                    ></Route>
                    <Route path="/component/Prof/Prof" element={<Prof />}></Route>
                    <Route
                        path="/component/Academy/Academy"
                        element={<Academy />}
                    ></Route>
                    <Route path="/component/Lab/Lab" element={<Lab />}></Route>
                    <Route
                        path="/component/Capston/Capston"
                        element={<Capston />}
                    ></Route>
                    <Route
                        path="/component/Event/Event"
                        element={<Event />}
                    ></Route>
                    <Route
                        path="/component/Contact/Contact"
                        element={<Contact />}
                    ></Route>
                </Routes>
                <Footer />
            </div>
        </div>
    );
}

export default App;