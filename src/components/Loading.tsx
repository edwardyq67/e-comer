import React from 'react';
import './css/loading.css';

const Loading: React.FC = () => {
    return (
        <div className="overlay ">
            <div className="loader">
                <span className="loader-text">loading</span>
                <span className="load"></span>
            </div>
        </div>
    );
};

export default Loading;