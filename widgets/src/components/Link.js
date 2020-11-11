import React from "react";

const Link = ({ className, href, children }) => {
  const handleClick = (event) => {
    // if it is command click, then open in a new tab as usual
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    // create a new event to inform Route components about URL change
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={handleClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
