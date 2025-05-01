import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/principal");
    } catch {
      setMensagem("Usuário não está cadastrado.");
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} /><br />
      <button onClick={login}>Acessar</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default Login;
