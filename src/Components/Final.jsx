import React from 'react'
import { useState, useEffect } from 'react';
import Main from './Main';
export default function Final() {
    const [shouldRenderPortfolio, setShouldRenderPortfolio] = useState(false);
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShouldRenderPortfolio(true);
      }, 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);
  return (
    <div>
        {shouldRenderPortfolio && <Main/>}
    </div>
  )
}
