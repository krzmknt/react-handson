import { useState, useEffect } from "react";

type useFetchType = (uri: string) => {
  loading: boolean;
  data: any;
  error: any;
};

export const useFetch: useFetchType = (uri) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
};
