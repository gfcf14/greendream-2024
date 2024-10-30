import { useState, useEffect, useCallback } from 'react';

const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      const jsonData = await res.json();

      if (res.ok) {
        setData(jsonData);
      } else {
        setError(`Error: ${res.status} ${res.statusText}`);
      }
    } catch (err) {
      console.log('****************');
      console.log(err);
      console.log('****************');
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchData;
