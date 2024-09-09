import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const [users, setUsers] = useState([{
        id: 0,
        login:"",
        avatar_url:""
    }]);
    const [error, setError] = useState<string | null>(null)

    //Criando o navigate para redirecionar para uma rota devida.
    const navigate = useNavigate();

    useEffect(() => {

        fetch('https://api.github.com/users')
            .then(response => {
                if (!response.ok) throw new Error('Erro ao gerar os dados');
                return response.json();
            })
            .then(data => {
                setUsers(data) 
            })
            .catch(err => {
                setError(err.message);
                navigate('/error');
            })

    });  

    return (
        <main>
            <h1>Welcome to my home page</h1>
                <div>
                    {users.map(user => (
                        <div key={user.id}>
                            <img src={user.avatar_url} alt={user.login} />
                            <p>{user.login}</p>
                        </div>
                        ))}
                </div>
        </main>
    );
}