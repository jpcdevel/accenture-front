import React from 'react';

function ReportItem(prop) {
    let size = prop.font_size ? prop.font_size: "18px";
    return (
        <div>
            <span style={{ display: "block", fontWeight: "bold", fontSize: size }}>{prop.value}</span>
            <p>{prop.description}</p>
        </div>
    );
}

export default ReportItem;