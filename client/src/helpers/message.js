import React from 'react';

export const showError = (message) => {
    return <div className="alert alert-danger" role="alert">{message}</div>
}

export const showSuccess = (message) => {
    return <div className="alert alert-success" role="alert">{message}</div>
}

