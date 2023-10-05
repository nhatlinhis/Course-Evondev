import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  // const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErroMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(initialUrl);

  const isMounted = useRef(true);

  useEffect(() => {
    //
    return () => {
      //unmounted component
      isMounted.current = false;
    };
  }, []);

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data?.data || []);
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
    setUrl,
    loading,
    errorMessage,
    data,
  };
}
