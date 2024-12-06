import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, dependencies = [], config = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, config);
        setData(response.data); // Axios automatically parses JSON
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, dependencies); // Triggers refetch when dependencies change

  return { data, isLoading, error };
};

export default useFetchData;
