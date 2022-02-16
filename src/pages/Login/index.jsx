import React, { useState } from 'react';
import logo from '../../assets/Logo.svg'
import api from '../../services/api';
import './styles.css'




export default function Login({ history }) {
    const [name, setname] = useState('');
    const [password, setPassword] = useState('');
    let [loading, setLoading] = useState(true);

    async function handleSubmit(e) {
         e.preventDefault();
         const response = await api.post('/login', { name, password });
            const { user } = response.data;
         if (response.status === 200) {
         localStorage.setItem('userToken', response.data.token);
         localStorage.setItem('userId', user.id);
         history.push('/dashboard');
        }
        if (response.status === 401) {
           console.log('Usuário ou senha inválidos');
        }
    }
    return (



        <div className="container-login text-center ">

            <img src={logo} id="logo-login" alt="Logo" />
            
            <form onSubmit={handleSubmit} >
            
                <div className="form-login">
                <label id="password">
                    <input
                        size={85}
                        className="login"
                        type="name"
                        id="name"
                        required
                        placeholder="perito@policiacientifica.com.br"
                        onChange={event => setname(event.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <input
                        className="login"
                        type="password"
                        required
                        id="password"
                        placeholder="******"
                        onChange={event => setPassword(event.target.value)}
                        value={password}

                    />
                </label>
                <div> <button className="btn btn-lg" onClick={() => setLoading(!loading)}  type="submit">ENTRAR</button></div>
                </div>
                
            </form>

        </div>

    )
}