import { useState, useEffect } from 'react';

const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then(async (res) => {
          const data = await res.json();

          if (data) {
            setData(data);
          } else {
            setError('An unknown error has occurred');
          }
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
