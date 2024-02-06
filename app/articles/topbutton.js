"use client"

export default function () {
    return (
        <div id="top-wrapper">
            <button type="button" id="top" onClick={window.location.replace("#.top")}>
                <div>
                    <span>
                        ↑<br />
                        TOP
                    </span>
                </div>
            </button>
        </div>
    )
}