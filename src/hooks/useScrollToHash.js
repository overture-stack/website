import { useEffect } from 'react';
import scrollToElement from 'scroll-to-element';

// scroll to element referenced in URL
// when component mounts

export default function useScrollToHash(location) {
  useEffect(() => {
    if (location.hash) {
      scrollToElement(location.hash, {
        offset: -70,
        duration: 250,
      });
    }
  }, []);
}
