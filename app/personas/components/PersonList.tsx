
type Person = {
  id: number;
  name: string;
  salary: number;
  age: number;
};

interface Props {
  personas: Person[];
}

export default function PersonList({ personas }: Props) {
  if (!personas.length) return <p>No hay personas registradas.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {personas.map((person) => (
        <li
          key={person.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            marginBottom: '10px',
            padding: '10px',
            background: '#083344ff'
          }}
        >
          <strong>{person.name}</strong> — {person.salary} — Edad: {person.age}
        </li>
      ))}
    </ul>
  );
}
