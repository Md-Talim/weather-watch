'use client';
import useData from '@/hooks/useData';

function Home() {
  const { data, error, isLoading } = useData();

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      {error && <p>{error}</p>}
      <div className='flex flex-col'>
        <h1>Location {data.location.name}</h1>
        <p>Tempreature {data.current.temp_c}</p>
      </div>
    </>
  );
}

export default Home;
