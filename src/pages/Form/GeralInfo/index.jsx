import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Spacer from "react-spacer";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import "./styles.css";
import one from "../../../assets/one.svg";

export default function GeralInfo(props) {
  const [geral, setGeral] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setGeral(data);
    props.next(data);
  };

  const history = useHistory();

  function handleClick() {
    history.push("/dashboard");
  }

  return (
    <Container>
      <Container className="form-container selectdiv">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="form-title">Etapa 1 - Informações gerais</h3>
          <Image className="andamento" src={one} />
          <Spacer height={50} />

          <Container>
            <Row>
              <Col>
                <InputGroup>
                  <FormControl
                    {...register("rep")}
                    className="input"
                    placeholder="Rep (xxx/2020) *"
                    required
                    defaultValue={props.rep}
                  />
                </InputGroup>
                <InputGroup>
                  <FormControl
                    {...register("indiciado")}
                    className="input"
                    placeholder="Indiciado"
                    defaultValue={props.indiciado}
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <FormControl
                    className="input"
                    {...register("inquerito")}
                    placeholder="Inquerito"
                    defaultValue={props.marca}
                    required
                  />
                </InputGroup>
                <Form.Select
                  className="input"
                  {...register("secao")}
                  defaultValue={props.secao}
                  required
                >
                  <option className="select-form">Seção *</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="input"
                  {...register("solicitante")}
                  defaultValue={props.solicitante}
                  required
                >
                  <option className="select-form">Orgão Solicitante *</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <InputGroup>
                  <FormControl
                    {...register("perito")}
                    className="input"
                    placeholder="Perito"
                    defaultValue={props.perito}
                    required
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <FormControl
                    {...register("oficio")}
                    className="input"
                    placeholder="Oficio*"
                    defaultValue={props.oficio}
                    required
                  />
                </InputGroup>
                <Form.Select
                  className="input"
                  {...register("inquerito")}
                  defaultValue={props.inquerito}
                  required
                >
                  <option selected className="select-form">
                    Tipo de Inquerito*
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Row>
                  <Col>
                    <input
                      type="date"
                      required
                      className="input date"
                      placeholder="Data de designação"
                      {...register("Data de designação", {})}
                    />
                  </Col>
                  <Col>
                    <input
                      type="date"
                      required
                      className="input date"
                      placeholder="Data Solicitação"
                      {...register("Data Solicitação", {})}
                    />
                  </Col>
                </Row>

                <Form.Select
                  className="input"
                  {...register("cidade")}
                  defaultValue={props.cidade}
                  required
                >
                  <option className="select-form">Cidade</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="input"
                  {...register("diretor")}
                  defaultValue={props.diretor}
                  required
                >
                  <option className="select-form">Diretor*</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="input"
                  {...register("natureza")}
                  defaultValue={props.natureza}
                  required
                >
                  <option className="select-form">Natureza do Exame</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>

            <Container className="text-center">
              <Spacer height={50} />
              <Button className="btn-form-prev" onClick={handleClick}>
                🡰 Voltar
              </Button>
              <Button className="btn-form-next" onClick={props.next}>
                {" "}
                Próximo🡲
              </Button>
            </Container>
          </Container>
        </form>
      </Container>
    </Container>
  );
}
