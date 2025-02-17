import { useState, useEffect } from 'react'

function Profile () {
    const [user, setUser] = useState({nome: 'Fulano', idade: 0})
    const [showUser, setShowUser] = useState(false)

    function incrementarIdade() {
        setUser({...user, idade: user.idade + 1})
    }

    useEffect(() => {
        if (user.idade === 0) {
            setShowUser(false)
        } else {
            console.log('Happy Birthday')
        }
    }, [user.idade])

    return (
        <div>
            {showUser && (
            <>
                <h1>Perfil</h1>
                <p>Nome: {user.nome}</p>
                <p>Idade: {user.idade}</p>
                <button onClick={incrementarIdade}>Incrementar Idade</button>
            </>)}
            <br />
            <button onClick={() => setShowUser(!showUser)}>{showUser ? "Hide User" : "Show User"}</button>
        </div>
    )
}

export default Profile