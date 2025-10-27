
export default function PersonList({ personas }) {
    if(!personas.length) return <p>No hay personas</p>

    return(
        <ul style={{ listStyle: 'none', padding: 0}}>   
            {personas.map(person => (

                <li key={person.id} style={{ border: '1px solid #ccc'}}>
                    
                    <strong>{person.name}</strong> - {person.salary} - Edad: {person.age}  
                </li>
            ))}

        
        </ul>
    );
}