import React, { useMemo, useState } from 'react';
import Spacer from 'react-spacer';
import {
  Container, Image, Button, Col, Row, FormControl, InputGroup,
} from 'react-bootstrap';
import './styles.css';
import camera from '../../../assets/camera.svg';
import check from '../../../assets/check.svg';
import four from '../../../assets/four.svg';

export default function ExameConcluir(props) {
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(
    () => (thumbnail ? URL.createObjectURL(thumbnail) : null),
    [thumbnail],
  );
  console.log(props.exame);

  return (

    <Container>
      <Container className="form-container selectdiv">
        <h3 className="form-title">Etapa 5 - Concluir Exame </h3>
        <Image className="andamento" src={four} />
        <Spacer height={50} />
        <Container className="text-center">

          <Row>
            <h4>
              <strong>Informações Gerais:</strong>
              {' '}
            </h4>
            <Col>
              <InputGroup>
                <FormControl
                  className="input"
                  placeholder="Rep"
                  value={props.state.rep}
                  placeholder={props.state.rep}

                />
              </InputGroup>
              <InputGroup>
                <FormControl
                  className="input"
                  placeholder="Seção"
                  value={props.state.secao}
                  placeholder={props.state.secao}

                />
              </InputGroup>
              <InputGroup>
                <FormControl
                  className="input"
                  placeholder="Perito"

                />
              </InputGroup>
            </Col>
            <Col />
          </Row>
          <hr size={6} className="line" />

          <Row>
            <Col />
            <Col />
          </Row>

          <Container className="text-center">
            <Spacer height={100} />
            <Button className="btn-form-prev" onClick={props.prev}>🡰 Voltar</Button>
            <Button className="btn-form-next" onClick={props.next}> Finalizar Exame🡲</Button>
          </Container>
        </Container>
      </Container>
    </Container>

  );
}
