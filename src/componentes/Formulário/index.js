import './Formulário.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botão from '../Botão';
import React, { useState } from 'react';

const Formulário = (props) => {
  //Os dados são passados para o elemento pai, e então passamos como prop para o componente

  //Eventos podem ser passados direto para o elemento, nesse caso precisamos ouvir o evento do formulário,
  //para que a validação dos campos seja considerada, ao invés de só ouvir o click do botão
  //uma arrow function dentro do atributo é suficiente, mas para eventos com mais ações uma função
  //separa seria o ideal
  //o método de evento preventDefault() impede o comportamnento padrão do formulário, impedindo que recarregue
  //ao clicar no botãos

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  //Para que o valor da variável seja alterado conforme o valor do input, usamos useState para renderizar essas alterações, a função alteração
  //vai receber o valor do input como parâmetro no elemento por onChange, e pegamos esse valor e passamos para a função setName, que irá atualizar
  //a variável e renderizar novamente o valor na tela

  //vamos tratar o fomulário como um objeto, cada campo é uma propriedade, e ao realizar o cadastro de um colaborador retornamos um objeto

  return (

    <section className="formulario">
      <form onSubmit={(event) => {event.preventDefault()
      props.cadastro({
        nome,
        cargo,
        imagem,
        time
      })
      setNome('')
      setCargo('')
      setImagem('')
      setTime('')}}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto valor={nome}
                    alteracao={(nome) => setNome(nome)}
                    obrigatório="true" 
                    label="Nome" 
                    placeholder="Digite seu nome" />

        <CampoTexto valor={cargo}
                    alteracao={(cargo) => setCargo(cargo)} 
                    obrigatório="true" 
                    label="Cargo" 
                    placeholder="Digite seu cargo" />

        <CampoTexto valor={imagem}
                    alteracao={(imagem) => setImagem(imagem)} 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"/>

        <ListaSuspensa  valor={time}
                        alteracao={(time) => setTime(time)}
                        obrigatório="true" 
                        label="Time" 
                        items={props.times}/>
        <Botão>Criar Card</Botão>
      </form>
    </section>
  );
};

export default Formulário;
