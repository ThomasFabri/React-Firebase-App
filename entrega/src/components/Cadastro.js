import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";

function Cadastro() {
  const [form, setForm] = useState({ email: "", senha: "", nome: "", sobrenome: "", dataNascimento: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const cadastrar = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.senha);
      const uid = userCredential.user.uid;
      await setDoc(doc(db, "usuarios", uid), {
        nome: form.nome,
        sobrenome: form.sobrenome,
        dataNascimento: form.dataNascimento,
        email: form.email,
        uid: uid,
      });
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Cadastro</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="senha" type="password" placeholder="Senha" onChange={handleChange} /><br />
      <input name="nome" placeholder="Nome" onChange={handleChange} /><br />
      <input name="sobrenome" placeholder="Sobrenome" onChange={handleChange} /><br />
      <input name="dataNascimento" type="date" onChange={handleChange} /><br />
      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;
