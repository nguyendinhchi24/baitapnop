import React from 'react';

const Alert = ({ text }) => {
    return (
        <div className="alert alert-warning" role="alert">
            {text}
        </div>
    );
}


function AlertComponent() {
    return (
        <div>
            <h1>Alert Component</h1>
            <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
        </div>
    );
}


export default AlertComponent;