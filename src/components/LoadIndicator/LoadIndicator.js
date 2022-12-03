import React from 'react';
import './loadingIndicator.scss';
function LoadIndicator({ loaderText }) {
    return (
        <div className='loadingIndicatorContainer'>
            <div className='loadingIndicatorText'>{`${loaderText ? loaderText : "Loading"}`}</div>
            <span className="loadingIndicator"></span>
        </div>
    )
}
export default LoadIndicator