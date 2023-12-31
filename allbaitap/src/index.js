import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import ThongTinSinhVients from './thongtinsv';
import Yourname from './yourname';
import ProfileCard from './ProfileCard';
import SingInForm from './signinform';
import AlertComponent from './alertcomponent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Yourname />
    <ThongTinSinhVients />
    <ProfileCard />
    <SingInForm />
    <AlertComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
