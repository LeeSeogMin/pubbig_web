import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

// reportWebVitals 관련 코드 제거 또는 주석 처리
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();