import {useMemo,useState,useEffect} from 'react'

export function useIsInViewport(ref:any) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      if(ref.current){
        observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
      }
 
    }, [ref, observer]);
  
    return isIntersecting;
  }
  