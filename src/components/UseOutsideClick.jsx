import { useEffect, useRef } from 'react';

function useOutsideClick(callback, excludeRef) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current && 
        !ref.current.contains(event.target) &&
        (!excludeRef || !excludeRef.current.contains(event.target))
      ) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, excludeRef]);

  return ref;
}

export default useOutsideClick;