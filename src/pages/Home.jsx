import React, {useEffect, useState} from 'react';
import AcercaDeProgramadores from '../components/Header/Header';
import HeaderNav from '../components/Header/Header';
const Home = () => {
  const [dataLista, setDataLista] = useState([])
  const getData = async () => {
    const url = 'https://rickandmortyapi.com/api/character/';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setDataLista(data.results);
  };
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>
      <HeaderNav />
      <h1>Aqui deberia aparace  los p </h1>
      {dataLista.map((character) => <p key={character.id}>{character.name}</p>)}
    </div>
  );
};

export default Home;
