import React from 'react';
import Spacer from 'react-spacer';
import {
  Container, Row, Col, Image, Button,
} from 'react-bootstrap';
import './styles.css';
import five from '../../../assets/five.svg';

export default function Concluir(props) {
   
  

  return (

    <Container>
      <Container className="form-container selectdiv">
        <h3 className="form-title">Etapa 5 - Concluir Exame</h3>
        <Image className="andamento" src={five} />
        <Spacer height={50} />
        <Container>
          <Row>
            <h3 className="form-title mb-5">Informações Gerais</h3>
            <Col>
              <Col>
                <p>REP:</p>
                <Col className="form-check">{props.state.rep}</Col>
              </Col>
              <Col>
              
                <p>Seção:</p>
                <Col className="form-check">{props.state.rep}</Col>
              </Col>
              <Col>
              
                <p>Perito:</p>
                <Col className="form-check">{props.state.perito}</Col>
              </Col>

            </Col>
            <Col>
              <Col>
              
                <p>Placa:</p>
                <Col className="form-check">{props.state.placa}</Col>
              </Col>
              <Col>
              
                <p>Diretor:</p>
                <Col className="form-check">{props.state.rep}</Col>
              </Col>
              <Row className="mx-auto">
                <Col>
                
                  <p>Data Solicitação:</p>
                  <Col className="form-check">{props.state.datasoli}</Col>
                </Col>
                <Col>
                
                  <p>Data Des.:</p>
                  <Col className="form-check">{props.state.datades}</Col>
                </Col>

              </Row>

            </Col>
          </Row>

          <hr size={6} className="line" />

          <Row>
            <h3 className="form-title mb-5">Dados Básicos</h3>
            <Col>
              <p>Placa</p>
              <Col className="form-check">{props.state.placa}</Col>
              <p>Cor</p>
              <Col className="form-check">{props.state.rep}</Col>

            </Col>
            <Col>
              <p>Marca</p>
              <Col className="form-check">{props.state.placa}</Col>

              <h6 className="mt-5">Estado de conservação : </h6>
              <h6 className="mx-5">
              
                {props.state.rep}
              
                ☑
              </h6>

            </Col>
          </Row>

          <Container className="text-center">
            <Spacer height={100} />
            <Button className="btn-form-next mx-4" onClick={props.prev}>🡰 Voltar</Button>
            <Button className="btn-form-prev mx-4" onClick={props.next}> Finalizar Exame🡲</Button>
          </Container>
        </Container>
      </Container>
    </Container>

  );
}
