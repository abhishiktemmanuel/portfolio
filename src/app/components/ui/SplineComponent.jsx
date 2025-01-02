'use client'
import Spline from '@splinetool/react-spline';

export default function SplineComponent() {
  return (
    <>
      <style>{`
        spline-viewer::part(overlay) {
          display: none !important;
          pointer-events: none !important;
        }
        
        a[href*="spline.design"] {
          display: none !important;
        }
      `}</style>

        <Spline style={{ pointerEvents: 'none' }}
          scene="https://prod.spline.design/8p5ZY0Vwjik7wqs7/scene.splinecode"
        />

    </>
  );
}