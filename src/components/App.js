import React, { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';

function App() {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
  })

  return (
    <div>
      <canvas id="c" ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
