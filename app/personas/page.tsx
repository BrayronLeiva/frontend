'use client';

import { useEffect, useState } from "react";
import PersonList from "./components/PersonList";

type Person = {
  id: number;
  name: string;
  salary: number;
  age: number;
};

export default function PersonasPage() {
  const [personas, setPersonas] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('http://localhost:8080/personas');
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        const data: Person[] = await res.json();
        setPersonas(data);
      } catch (err: any) {
        setError(err.message || 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Cargando personas...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Personas</h1>
      <PersonList personas={personas} />
    </div>
  );
}
