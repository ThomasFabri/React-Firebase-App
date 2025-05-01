import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";

function Principal() {
  const [dados, setDados] = useState({});

  useEffect(() => {
    const buscarDados = async () => {
      const uid = auth.currentUser.uid;
      const docRef = doc(db, "usuarios", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDados(docSnap.data());
      }
    };
    buscarDados();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Página Principal</h2>
      <p>Nome: {dados.nome}</p>
      <p>Sobrenome: {dados.sobrenome}</p>
      <p>Data de Nascimento: {dados.dataNascimento}</p>
    </div>
  );
}

export default Principal;
