import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErroMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=''`
  );

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErroMessage(`The error happend ${error}`);
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return {
    query,
    setQuery,
    setUrl,
    loading,
    errorMessage,
    hits,
  };
}
