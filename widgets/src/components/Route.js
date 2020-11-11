import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  // this state piece is needed to re-render the component whenever
  // window.location.pathname changes
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // listen for the nav event
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
