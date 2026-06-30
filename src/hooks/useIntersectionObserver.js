import { useEffect, useRef, useState } from 'react';

/**
 * A custom React hook that returns a ref and a boolean indicating whether the
 * observed element is currently intersecting (visible in the viewport).
 */
export function useIntersectionObserver({
  triggerOnce = false,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
} = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Once visible, optionally stop observing if we only want animate-once behavior
        if (triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsIntersecting(false);
      }
    }, {
      threshold,
      rootMargin
    });

    observer.observe(element);
    return () => {
      if (element && !triggerOnce) {
        observer.unobserve(element);
      }
    };
  }, [triggerOnce, threshold, rootMargin]);

  return [elementRef, isIntersecting];
}
