'use client'
import { Suspense, lazy } from 'react';
import { BlinkBlur } from 'react-loading-indicators';

const SplineComponent = lazy(() => import('@splinetool/react-spline'));

export default function Scene() {
  return (
    <Suspense fallback={<div><BlinkBlur color="#139add" size="medium" text="" textColor="" /></div>}>
      <style>{`
        spline-viewer::part(overlay) {
          display: none !important;
          pointer-events: none !important;
        }
        
        a[href*="spline.design"] {
          display: none !important;
        }
      `}</style>  
      
      <SplineComponent 
        style={{ pointerEvents: 'none' }}
        scene="https://prod.spline.design/8p5ZY0Vwjik7wqs7/scene.splinecode"
      />
    </Suspense>
  );
}
