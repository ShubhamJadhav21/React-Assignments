import React from "react";

import './Benefits.css'
export default function Benefits() {
  const features = [
    "Component-based architecture",
    "Virtual DOM for efficient updates",
    "Rich ecosystem and community",
    "Cross-platform development",
    "Strong community support",
  ];
  return (
    <div>
      
      <h1>Benefits of using react...</h1>
      <div className="container" >
      <ol>
        {
            features.map(item=><li>{item}</li>)
        }
      </ol>

      
      </div>
    </div>
  );
}
