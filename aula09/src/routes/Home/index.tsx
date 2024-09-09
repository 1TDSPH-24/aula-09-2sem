import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type pokemon = {
    name : string,
    imagem : string
}


export default function Home() {

    const [pokemons, setPokemons] = useState({
        name: "",
        imagem: ""
    });
    const [error, setError] = useState<string | null>(null)

    //Criando o navigate para redirecionar para uma rota devida.
    const navigate = useNavigate();

    useEffect(() => {
        const pegarPokemon = async (id: Number) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            try {
                if (!response.ok) {
                    throw new Error("Dados solicitados incompletos")
                }

                const data = await response.json();
                console.log(data)
                const name = data['name'];
                const imagem = data['sprites']['front_default']
                const pokemon = {
                    name : name,
                    imagem : imagem
                }
                setPokemons(pokemon)

            } catch (err) {
                console.log(err)
            }
        }
        pegarPokemon(1)

    });

    return (
        <main>
            <h1>Welcome to my home page</h1>
            <div>
                {/* {pokemons.map((pokemon, indice) => (
                    <div key={indice}>
                        <p>{pokemon.name}</p>
                        <img src={pokemon.imagem} />
                    </div>
                ))} */}
                <p>{pokemons.name}</p>
                <img src={pokemons.imagem} alt="" />
            </div>
        </main>
    );
}