import Banner from './componentes/Banner';
import Formulário from './componentes/Formulário';
import React, { useState } from 'react';
import Time from './componentes/Time';
import Rodapé from './componentes/Rodapé';
import Titulo from './componentes/Titulo';



function App() {
  const [colaboradores, setColaboradores] = useState([]) //colaboradores começa como um array vazio

  colaboradores.forEach((colaborador, index) => colaborador.id = index )

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])

  return (
    <div className="App">
      <Banner />
      <Formulário times={times} cadastro={(colaborador)=> setColaboradores([...colaboradores, colaborador])}/>
      {colaboradores.length > 0 && <section className='container'>
                                      <Titulo />
                                      {times.map((time)=>  <Time key={time.nome} 
                                                                 time= {time}
                                                                 deletar = {(id) => setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id))}
                                                                 colaboradores = {colaboradores.filter((colaborador) => colaborador.time === time.nome)}
                                                                 mudarCor = {(cor, nome) => setTimes(times.map((time) => {time.cor = (time.nome === nome) ? cor : time.cor
                                                                 return time} ))}
                                                                />)}
                                    </section>}
      
      <Rodapé />
    </div>
  );
}

//spread operator -> [...colaboradores,] essa sintaxe espalha os elementos de um array em outro, apenas passando o nome do array e três pontos antes
//com esse operador é possível duplicar e até concatenar arrays
//nosso set colaboradores cria um novo array usando os colaboraodres já existentes, e adiconando ao final o novo cadastrado
//Dessa forma o valor do array colaboradores é alterado completamente com um novo elemento, e partindo desse array criaremos nossos cards

export default App;
