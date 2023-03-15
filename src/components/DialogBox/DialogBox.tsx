import React from "react";
import "./DialogBox.css";

const DialogBox = () => {

    return (
        <div className="dialogbox-container">
            <div className="dialogbox">
                <div className="dialogbox-header">
                    <h2>Choose a storage method</h2>
                    <div className="dialogbox-tabs">
                        <div className="dialogbox-tab">
                            <h3>Local Storage</h3>
                            <p>Use local storage to store your data.</p>
                            <button>Choose</button>
                        </div>
                        <div className="dialogbox-tab">
                            <h3>Google Sheets</h3>
                            <p>Use Google Sheets to store your data.</p>
                            <button>Choose</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DialogBox;