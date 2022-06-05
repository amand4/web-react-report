import React from "react";
import { Steps, Step } from "react-step-builder";
import SideMenu from '../../components/SideNav';
import Header from '../../components/Header';
import GeralInfo from './GeralInfo';
import BasicInfo from './BasicInfo';
import Final from './Final';
import PecaUm from './PecaUm';
import PecaDois from './PecaDois';
import ExameChassi from './ExameChassi';
import ExameMotor from './ExameMotor';
import Concluir from './Concluir';
import './styles.css';




export default function Form(props) {

  return (

    <div id="dashboard-main" >
      <Header />
      <SideMenu />
      <Steps>
        <Step component={GeralInfo} />
        <Step component={BasicInfo} />
        <Step component={PecaUm} />
        <Step component={ExameChassi} />
        <Step component={PecaDois} />
        <Step component={ExameMotor} />
        <Step component={Concluir} />
        <Step component={Final} />
      </Steps>

    </div>


  )
}