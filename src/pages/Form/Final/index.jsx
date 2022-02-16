import React, { useMemo, useState } from 'react';
import Spacer from 'react-spacer'
import { Container, Button, Image } from 'react-bootstrap';
import './styles.css'
import camera from '../../../assets/camera.svg'
import check from '../../../assets/check.svg'
import five from '../../../assets/five.svg'



export default function Final(props) {

    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail) : null;
        },
        [thumbnail]
    )



    return (

        <Container>
            <Container className="form-container selectdiv">
                <h3 className="form-title">Etapa 5 - Concluir Exame </h3>
                <Image className="andamento" src={five} />
                <Spacer height={50} />
                <Container className="text-center">

                    <h3 className="form-title">Peças:</h3>
                    <Button className="btn-cm-check">Chassi⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     <img src={check} className="btn-img" alt="" /></Button>
                    <Button className="btn-cm-check">Motor ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⠀     <img src={check} className="btn-img" alt="Logo" /></Button>
                    <Button className="btn-cm-check">Vidro⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  <img src={check} className="btn-img" alt='' /></Button>
                    <hr size={6} className="line" />
                    <h3 className="form-title">Galeria</h3>

                    <label className="btn-add-image btn"> Adicionar Imagem <img src={camera} alt="" />
                        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                    </label>
                    <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }} className={thumbnail ? 'has-thumbnail' : ''} >
                    </label>





                    <Container className="text-center">
                        <Spacer height={100} />
                        <Button className="btn-form-prev" onClick={props.prev}>🡰 Voltar</Button>
                        <Button className="btn-form-next" onClick={props.next}> Finalizar Exame🡲</Button>
                    </Container>
                </Container>
            </Container>
        </Container>

    )



}