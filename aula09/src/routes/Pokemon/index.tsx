import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(
    {
        form_name: "",
        form_order: 0 
    }
  );

  const { urlParam } = useParams();

  useEffect(() => {
    async function loadingPokemon() {
      if (urlParam) {
        const response = await fetch(urlParam);
        try {
          if (!response.ok) {
            throw new Error("Dados solicitados incompletos!");
          }
          const data = await response.json();
          setPokemon(data);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      }
    }
    loadingPokemon();
  });

  return (
    <main>
      <h1>Welcome to my home page</h1>
      <div>
        <div>
          
            <div>
              <p>{pokemon.form_name}</p>
              <p>{pokemon.form_order}</p>
            </div>
        </div>
      </div>
    </main>
  );
}