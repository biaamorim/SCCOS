import { useCallback } from "react";

function useDebounce() {
  const debounce = useCallback((func: () => void) => {
    setTimeout(() => {
      func();
    }, 300);
  }, []);
  return debounce;
}

export default useDebounce;
