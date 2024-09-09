import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [users, setUsers] = useState([{
       name: "",
        url:""
    }]);

    useEffect(() => {
       
        async function users(){
           
            const response = await fetch('https://pokeapi.co/api/v2/pokemon-form');
            try{
                if(!response.ok){
                    throw new Error("Dados solicitados incompletos!");
                }
                    const data = await response.json();
                    const results =  data["results"];
                    setUsers(results);
                }catch(err){
                    console.log(err)
                }
        }
        users();
    });  

    return (
        <main>
            <h1>Welcome to my home page</h1>
                <div>
                  
                        <div>
                           {users.map((user,indice)=>(
                            <div key={indice}>
                                <p>{user.name}</p>
                                <p>{user.url}</p>
                                <p><Link to={`/poke/"${user.url}"`}>POKEMON</Link></p>
                             </div>
                           ))}
                        </div>
                </div>
        </main>
    );
}


// <div>
// {users.map(user => (
//     <div key={user.id}>
//         <img src={user.avatar_url} alt={user.login} />
//         <p>{user.login}</p>
//     </div>
//     ))}
// </div>

// fetch('https://api.github.com/users')
// .then(response => {
//     if (!response.ok) throw new Error('Erro ao gerar os dados');
//     return response.json();
// })
// .then(data => {
//     setUsers(data) 
// })
// .catch(err => {
//     setError(err.message);
//     navigate('/error');
// })