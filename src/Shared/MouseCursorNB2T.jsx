import React from 'react'

export default function MouseCursorNB2T() {
    return (
        <div>
            {/* Back To Top Start */}
            <button id="back-top" className="back-to-top show">
                <i className="fa-regular fa-arrow-up"></i>
            </button>

            {/* MouseCursor Start */}
            <div className="mouseCursor cursor-outer"></div>
            <div className="mouseCursor cursor-inner"></div>
        </div>
    )
}
