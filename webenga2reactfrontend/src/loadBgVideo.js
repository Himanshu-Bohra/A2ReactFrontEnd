import React from "react";

function LoadBG({backGround})
{
    return (
        <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1, // Places it behind other content
      }}
    >
        <video autoPlay muted loop style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            <source src={backGround} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        </div>
    );


}

export default LoadBG;