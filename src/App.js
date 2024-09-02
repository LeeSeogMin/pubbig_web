import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
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
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/component/Major/Major"
                    component={Major}
                />
                <Route path="/component/Prof/Prof" component={Prof} />
                <Route
                    path="/component/Academy/Academy"
                    component={Academy}
                />
                <Route path="/component/Lab/Lab" component={Lab} />
                <Route
                    path="/component/Capston/Capston"
                    component={Capston}
                />
                <Route
                    path="/component/Event/Event"
                    component={Event}
                />
                <Route
                    path="/component/Contact/Contact"
                    component={Contact}
                />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
