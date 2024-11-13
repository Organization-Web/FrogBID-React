import React from "react";

function PreLoader() {
    return (
        <div>
            <div id="loading" className="preloader">
                <div className="loading-overlay"></div>
                <div className="custom-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default PreLoader