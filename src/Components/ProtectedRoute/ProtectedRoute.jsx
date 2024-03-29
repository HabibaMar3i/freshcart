import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
    if (localStorage.getItem('userToken') !== null) {
        return props.children
    }
    else {
        return <Navigate to="/" />;
    }
}

export default ProtectedRoute