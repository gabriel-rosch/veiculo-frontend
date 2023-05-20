//CRUD
//R - READ - [OK]
//C - CREATE - [OK]
//

import { useState } from "react";
import { Button, Form, Table } from 'react-bootstrap';
import styles from './Veiculo.module.css'

function Veiculo() {
  let [veiculos, setVeiculos] = useState([]);
  let [marca, setMarca] = useState('');
  let [modelo, setModelo] = useState('');
  let [ano, setAno] = useState('');
  let [cor, setCor] = useState('');

  function salvar() {
    let veiculo = {
      marca: marca,
      modelo: modelo,
      ano: ano,
      cor: cor
    }
    veiculos.push(veiculo)
    setVeiculos([...veiculos])
    limparForm()
  }

  function excluir(veiculo) {
      veiculos.forEach((v,i)=>{
        if(veiculo.marca == v.marca) {
          veiculos.splice(i,1)
        }
      }) 
      setVeiculos([...veiculos])
  }
  //limpar forme
  function limparForm() {
    setAno('')
    setCor('')
    setMarca('')
    setModelo('')
  }

  return (
    <div className={styles.main}>
      <h1>Veiculo</h1>
      <Form.Control
        value={marca}
        onChange={(e)=>{setMarca(e.target.value)}}
        placeholder="Marca"
        aria-label="Marca"
        aria-describedby="basic-addon1"
      />
      <Form.Control
        value={modelo}
        onChange={(e)=>{setModelo(e.target.value)}}
        placeholder="Modelo"
        aria-label="Modelo"
        aria-describedby="basic-addon1"
      />
      <Form.Control
        value={ano}
        onChange={(e)=>{setAno(e.target.value)}}
        placeholder="Ano"
        aria-label="Ano"
        aria-describedby="basic-addon1"
      />
      <Form.Control
        value={cor}
        onChange={(e)=>{setCor(e.target.value)}}
        placeholder="Cor"
        aria-label="Cor"
        aria-describedby="basic-addon1"
      />
      <Button onClick={salvar}>Salvar</Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <td>Marca</td>
            <td>Modelo</td>
            <td>Ano</td>
            <td>Cor</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
        { 
          veiculos.map((veiculo, i) => {
            return (

              <tr key={i}>
                <td>{veiculo.marca}</td>
                <td>{veiculo.modelo}</td>
                <td>{veiculo.ano}</td>
                <td>{veiculo.cor}</td>
                <td>
                  <Button onClick={()=>{excluir(veiculo)}}>x</Button>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </Table>
    </div>
  );
}

export default Veiculo;
