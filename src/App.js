import Banner from './componentes/Banner';
import Formulário from './componentes/Formulário';
import React, { useState } from 'react';
import Time from './componentes/Time';
import Rodapé from './componentes/Rodapé';



function App() {
  const [colaboradores, setColaboradores] = useState([]) //colaboradores começa como um array vazio

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  return (
    <div className="App">
      <Banner />
      <Formulário times={times} cadastro={(colaborador)=> setColaboradores([...colaboradores, colaborador])}/>
      {times.map((time)=>  <Time key={time.nome} 
                                nome={time.nome} 
                                corPrimaria={time.corPrimaria} 
                                corSecundaria={time.corSecundaria} 
                                colaboradores = {colaboradores.filter((colaborador) => colaborador.time === time.nome)} />)}
      <Rodapé />
    </div>
  );
}

//spread operator -> [...colaboradores,] essa sintaxe espalha os elementos de um array em outro, apenas passando o nome do array e três pontos antes
//com esse operador é possível duplicar e até concatenar arrays
//nosso set colaboradores cria um novo array usando os colaboraodres já existentes, e adiconando ao final o novo cadastrado
//Dessa forma o valor do array colaboradores é alterado completamente com um novo elemento, e partindo desse array criaremos nossos cards

export default App;
