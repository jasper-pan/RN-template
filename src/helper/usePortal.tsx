import { useEffect, useRef } from "react";

const usePortal = (id:string) => {
    const rootElemRef = useRef(document.createElement('div'));
  
    useEffect(function setupElement() {
      // Look for existing target dom element to append to
      const parentElem:any = document.querySelector(`#${id}`);
      // Add the detached element to the parent
      parentElem.appendChild(rootElemRef.current);
      // This function is run on unmount
      return function removeElement() {
        rootElemRef.current.remove();
      };
    }, []);
  
    return rootElemRef.current;
  }
