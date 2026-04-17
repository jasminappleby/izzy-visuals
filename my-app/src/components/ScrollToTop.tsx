// Source - https://stackoverflow.com/a/54343182
// Posted by Gerard Rovira
// Retrieved 2026-04-05, License - CC BY-SA 4.0

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
