import { useEffect, useRef, useState } from "react";
import { useKey } from "../../hooks/useKey";

function Search({ query, setQuery }) {
  const [localQuery, setLocalQuery] = useState(query);
  const inputEl = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(localQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [localQuery, setQuery]);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setLocalQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={localQuery}
      onChange={(e) => setLocalQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;
