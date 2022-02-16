import React, { useMemo, useState } from "react";
import Spacer from "react-spacer";
import { useForm } from "react-hook-form";
import "react-slidedown/lib/slidedown.css";

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
import three from "../../../assets/three.svg";
import camera from "../../../assets/camera.svg";

export default function Exame(props) {
  const [thumbnail, setThumbnail] = useState(null);
  const [rust, setRust] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const preview = useMemo(
    () => (thumbnail ? URL.createObjectURL(thumbnail) : null),
    [thumbnail]
  );

  return (
    <Container>
      <Container className="form-container selectdiv">
        <h3 className="form-title">Etapa 3 - Peça </h3>
        <Image className="andamento" src={three} />
        <Spacer height={50} />
        <Container>
          <Row>
            <Col>
              <Button className="btn-peca" variant="light" disabled>
                Peça : Chassí
              </Button>
              <Col className="text-left m-5">
                <label>
                  <input
                    type="radio"
                    onClick={() => setRust(false)}
                    className="option-input radio mx-4"
                    name="example"
                    checked
                  />
                  Integro
                </label>
                <label>
                  <input
                    type="radio"
                    onClick={() => setRust(true)}
                    className="option-input radio mx-4"
                    name="example"
                  />
                  Adulterado
                </label>
              </Col>

              <Row>
                <Col>
                  <Form.Select
                    className="input"
                    {...register("tipo_alteracao")}
                    defaultValue={props.tipo_alteracao}
                    required
                  >
                    <option className="select-form">Tipo de Adulteração</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select
                    className="input"
                    {...register("tipo_numeracao")}
                    defaultValue={props.tipo_numeracao}
                    required
                  >
                    <option className="select-form">Tipo de Númeração</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>

              {rust === true ? (
                <>
                  <Row className="text-left mt-3 mb-5">
                    <Col>
                      <input
                        {...register("Grau de adulteração", { required: true })}
                        className="option-input radio mx-4"
                        type="radio"
                        value="Parcial"
                      />
                      Parcial
                      <input
                        {...register("Grau de adulteração", { required: true })}
                        type="radio"
                        className="option-input radio mx-4"
                        value="Total"
                      />
                      Total
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup>
                        <FormControl className="input" placeholder="W" />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl className="input" placeholder="M" />
                      </InputGroup>
                      <hr size={4} className="line" />
                      <h6 className="text-center">WMI</h6>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl className="input" placeholder="I" />
                      </InputGroup>
                    </Col>
                    <Col />
                    <Col />
                    <Col>
                      <InputGroup>
                        <FormControl className="input" placeholder="W" />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl className="input" placeholder="M" />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl className="input" placeholder="I" />
                      </InputGroup>
                      <hr size={4} className="line" />
                      <h6 className="text-center">VDS</h6>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl className="input" placeholder="M" />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl className="input" placeholder="I" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup>
                        <FormControl className="input" placeholder="W" />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl
                          {...register("m")}
                          className="input"
                          placeholder="M"
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl
                          {...register("i")}
                          className="input"
                          placeholder="I"
                        />
                      </InputGroup>
                    </Col>

                    <Col>
                      <InputGroup>
                        <FormControl
                          {...register("w")}
                          className="input"
                          placeholder="W"
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl
                          {...register("m")}
                          className="input"
                          placeholder="M"
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl className="input" placeholder="I" />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl className="input" placeholder="M" />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl
                          className="input"
                          placeholder="I"
                          defaultValue={props.i}
                          {...register("i4")}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <FormControl
                          className="input"
                          placeholder="I"
                          defaultValue={props.i}
                          {...register("i5")}
                        />
                      </InputGroup>
                    </Col>
                    <hr size={4} className="line" />
                    <h6 className="text-center">VIS</h6>
                    <Button className="btn btn-form-next my-5">
                      Adicionar Numeração
                    </Button>
                  </Row>
                </>
              ) : (
                <Row></Row>
              )}
              <Col className="numeracao text-center" />
            </Col>
          </Row>

          <Col className="text-center">
            <label className="btn-add-image btn">
              Adicionar Imagem
              <img src={camera} />
              <input
                type="file"
                onChange={(event) => setThumbnail(event.target.files[0])}
              />
            </label>
          </Col>

          <label
            id="thumbnail-exame"
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? "has-thumbnail" : ""}
          />

          <Container className="text-center">
            <Spacer height={30} />
            <Button className="btn-form-prev" onClick={props.prev}>
              🡰 Voltar
            </Button>
            <Button className="btn-form-next" onClick={props.next}>
              {" "}
              Próximo🡲
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
