import React from 'react';
import '../../css/Loading.css';

function Loading() {

    return (
        <div className="Loading-body">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            <div>Loading...</div>
        </div>
    );
}

export default Loading;