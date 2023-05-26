import apiClient from '@/services/api-client';
import { useEffect, useState } from 'react';

interface FetchDataResponse {
  location: { name: string; region: string; country: string };
  current: {
    temp_c: number;
    temp_f: number;
    condition: { text: string; icon: string; code: number };
  };
}

const useData = () => {
  const [data, setData] = useState<FetchDataResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchDataResponse>(`/current.json`, {
        params: { q: 'auto:ip', aqi: 'no' },
      })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return { data, error, isLoading };
};

export default useData;
