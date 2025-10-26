import { useEffect, useRef, useState } from "react";
import { useKey } from "../../hooks/useKey.tsx";
import styles from "./Search.module.css";

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

function Search({ query, setQuery }: SearchProps) {
  const [localQuery, setLocalQuery] = useState<string>(query);
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(localQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [localQuery, setQuery]);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current?.focus();
    setLocalQuery("");
  });

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search movies..."
      value={localQuery}
      onChange={(e) => setLocalQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;
