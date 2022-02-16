import React from "react";
import { useForm } from "react-hook-form";
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
import two from "../../../assets/two.svg";

export default function BasicInfo(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.next(data);
  };

  return (
    <Container>
      <Container className="form-container selectdiv">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="form-title">Etapa 2 - Informações básicas</h3>
          <Image className="andamento" src={two} />
          <Spacer height={50} />
          <Container>
            <Row>
              <Col>
                <InputGroup>
                  <FormControl
                    {...register("placa")}
                    className="input"
                    placeholder="Placa *"
                    defaultValue={props.placa}
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <FormControl
                    className="input"
                    {...register("modelo")}
                    placeholder="Modelo"
                    defaultValue={props.modelo}
                    required
                  />
                </InputGroup>

                <Form.Select
                  className="input"
                  {...register("marca")}
                  defaultValue={props.marca}
                  required
                >
                  <option className="select-form">Marca</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Fiat">Fiat</option>
                  <option value="Ford">Ford</option>
                  <option value="Honda">Honda</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Renault">Renault</option>
                  <option value="Peugeot">Peugeot</option>
                  <option value="Citroen">Citroen</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Mitsubishi">Mitsubishi</option>
                  <option value="Kia">Kia</option>
                  <option value="Dodge">Dodge</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Mazda">Mazda</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Audi">Audi</option>
                  <option value="BMW">BMW</option>
                  <option value="Hummer">Hummer</option>
                  <option value="Cadillac">Cadillac</option>
                  <option value="Daihatsu">Daihatsu</option>
                  required
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  className="input"
                  {...register("cor")}
                  defaultValue={props.cor}
                >
                  <option selected className="select-form">
                    Cor
                  </option>
                  <option value="azul">Azul</option>
                  <option value="preto">Preto</option>
                  <option value="vermelho">Vermelhor</option>
                  <option value="verde">Verde</option>
                  <option value="amarelo">Amarelo</option>
                  <option value="branco">Branco</option>
                  <option value="prata">Prata</option>
                  <option value="rosa">Rosa</option>
                  <option value="cinza">Cinza</option>
                  <option value="laranja">Laranja</option>
                  <option value="marrom">Marrom</option>
                  <option value="bege">Bege</option>
                  <option value="lilas">Lilas</option>
                  <option value="rosa">Rosa</option>
                  <option value="verde-mar">Verde-Mar</option>
                  <option value="verde-oliva">Verde-Oliva</option>
                  <option value="verde-piscina">Verde-Piscina</option>
                  <option value="verde-marinho">Verde-Marinho</option>
                </Form.Select>
                <InputGroup>
                  <FormControl
                    className="input"
                    placeholder="Ano/Modelo/Fab"
                    defaultValue={props.AMF}
                    {...register("AMF")}
                  />
                </InputGroup>
                <label>
                  <input
                    {...register("conservação", { required: true })}
                    className="option-input radio mx-4"
                    type="radio"
                    value="Bom"
                  />
                  Bom
                </label>
                <label>
                  <input
                    {...register("conservação", { required: true })}
                    className="option-input radio mx-4"
                    type="radio"
                    value=" Regular"
                  />
                  Regular
                </label>
                <label>
                  <input
                    {...register("conservação", { required: true })}
                    className="option-input radio mx-4"
                    type="radio"
                    value=" Mau"
                  />
                  Mau
                </label>
              </Col>
            </Row>
            <Container className="text-center">
              <Spacer height={100} />
              <Button className="btn-form-prev" onClick={props.prev}>
                🡰 Voltar
              </Button>
              <Button className="btn-form-next" type="submit">
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
