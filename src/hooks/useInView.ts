import { useState, useEffect, useRef, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {}
): {
  ref: RefObject<T>;
  inView: boolean;
} {
  const { threshold = 0, rootMargin = '0px', triggerOnce = false } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);
  const prevInView = useRef(inView);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        
        // Update state only if the view state has changed
        if (prevInView.current !== isInView) {
          setInView(isInView);
          prevInView.current = isInView;
          
          // If triggerOnce is true and element is in view, disconnect the observer
          if (triggerOnce && isInView) {
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
}