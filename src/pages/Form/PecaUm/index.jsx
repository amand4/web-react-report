import React from 'react';
import Spacer from 'react-spacer'

import { Container, Button, Image } from 'react-bootstrap';
import './styles.css';
import three from '../../../assets/three.svg'



export default function PeçaUm(props) {
    return (
        <Container>
            <Container className="form-container selectdiv">
                <h3 className="form-title">Etapa 3 - Peça </h3>
                <Image className="andamento" src={three} />
                <Spacer height={50} />
                <Container className="text-center">
                    <h2 className="title-cm">Escolha uma peça:</h2>
                    <Button className="btn-cm" onClick={props.next}>Chassi⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀🡲</Button>
                    <Button className="btn-cm" onClick={()=> alert('Primeiro preencha o campo de chassi')}>Motor⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀🡲</Button>
                    <Container className="text-center">
                        <Spacer height={100} />
                        <Button className="btn-form-prev" onClick={props.prev}>🡰 Voltar</Button>
                    </Container>
                </Container>
            </Container>
        </Container>

    )



}