import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false) // Default to false SSR

  React.useEffect(() => {
    // Check on mount (client-side only)
    const checkDevice = () => {
       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }
    checkDevice(); // Initial check

    // Listener for window resize
    const handleResize = () => {
      checkDevice();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return isMobile
}
