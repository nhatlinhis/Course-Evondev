import React, { useRef, useState } from "react";
import axios from "axios";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMasseage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};

const hackerNewReducer = (state, action) => {
  return state;
};

//https://hn.algolia.com/api/v1/search?query=react
const HackerNewsWithReducer = () => {
  const [state, dispatch] = React.useReducer(hackerNewReducer, initialState);
  const handleFetchData = useRef({});
  // const [hits, setHits] = useState([]);
  // const [query, setQuery] = useState("react");
  // const [loading, setLoading] = useState(true);
  // const [errorMessage, setErroMessage] = useState("");
  // const [url, setUrl] = useState(
  //   `https://hn.algolia.com/api/v1/search?query=''`
  // );
  handleFetchData.current = async () => {
    // setLoading(true);
    console.log("it is working !");
    try {
      // const response = await axios.get(url);
      // setHits(response.data?.hits || []);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      // setErroMessage(`The error happend ${error}`);
    }
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, []);
  return (
    <div className="bg-white mx-auto mt-5 p-5 md:5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          defaultValue={state.query}
          // onChange={(e) => setQuery(e.target.value)}
        />
        <button
          // onClick={() =>
          //   setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          // }
          className="bg-blue-500 text-white font-semibold p-5 rounded-md  flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-400 my-5">{state.errorMessage} </p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithReducer;
