'use client';

import Page from '@/components/Page';
import { useEffect, useState } from 'react';

export default function Home() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/programs');
      const data = await response.json();
      setPrograms(data);
    }
    fetchData();
  }, []);

  console.log(programs);

  return <Page>{'Programs Page'}</Page>;
}
