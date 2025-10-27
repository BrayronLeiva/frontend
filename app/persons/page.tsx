'use client';
import { useEffect, useState } from "react";
import PersonList from './components/PersonList';

export default function PersonasPage(){

    const [personas, setPersonas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    
    useEffect(() => {
        async function loadData(){
        try{
            const res = await fetch('htpp://localhost:8080/personas');
            if(!res.ok) throw new Error('Error');
            const data = await res.json();
            setPersonas(data);
        } catch(err){
            setError(err.message);
        } finally{
            setLoading(false);
        }
    }
    loadData();

}, []);

    if (loading) return <p>Cargando Personas</p>;
    if (error) return <p>Error: {error}</p>

    return(
        <div>
            <h1>Personas</h1>
            <PersonList personas={personas}/>
        </div>
    );

}
