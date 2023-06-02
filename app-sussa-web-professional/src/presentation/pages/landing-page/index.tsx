import Header from "../../components/header";
import styles from './style.module.css';
import GithubIcon from "../../../assets/icons/github-icon";
import LinkedinIcon from "../../../assets/icons/linkedin-icon";
import GoUpButton from "../../components/go-up-button";
import { useEffect, useRef } from "react";
import Lottie from 'react-lottie';
import Footer from "../../components/footer";

import animationData from '../../../assets/lottie/106278-relaxing-boy.json';

export const LandingPage: React.FC = () => {

  const goUpButton = useRef(null);
  
  function changeFloatingButtonOnScroll() {
    if (window.scrollY < 370) {
      if (goUpButton.current !== null) {
        (goUpButton.current as unknown as any).style.display = 'none';
      }
    } else {
      if (goUpButton.current !== null) {
        (goUpButton.current as unknown as any).style.display = 'flex';
      }
    }
  }

  useEffect(() => {
    if (goUpButton.current !== null) {
      (goUpButton.current as unknown as any).style.display = 'none';
    }
    window.addEventListener('scroll', changeFloatingButtonOnScroll);
  }, []);
  const defaultOptionsLottie = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <>
      <Header />
      <GoUpButton ref={goUpButton} />
      <section className={styles.hero} >
        <div className={styles.align}>align</div>
        <div className={styles.content}>
          <h1>Fique SUSSA!</h1>
          <p style = {{textAlign: "justify"}}>
            Bem-vindo ao SUSSA - sua companhia confiável para cuidar da sua saúde mental e emocional. Estamos aqui para oferecer um espaço seguro e acolhedor, onde você pode encontrar apoio, recursos e ferramentas eficazes para promover o seu bem-estar mental. Este aplicativo é destinado a estudantes, desde aqueles que buscam maneiras de lidar com o estresse diário até aqueles que enfrentam desafios mais complexos. Nossa missão é capacitar você a entender, gerenciar e melhorar sua saúde mental de forma significativa e duradoura.
          </p>
          <a 
            className={styles.btnHero}
            id={styles.contact}
            href="login"
          >
            Entrar como psicólogo
            {/* <Mail /> */}
          </a>
          <div 
            className={styles.btnHero}
            id={styles.resume}
            onClick={() => {
            }}
          >
            Baixar app do aluno
            {/* <Briefcase /> */}
          </div>
        </div>
        <div className={styles.lottieContainer}>
          <Lottie 
            options={defaultOptionsLottie} 
            width={350} 
            height={350} 
            isClickToPauseDisabled={true}
          />
        </div>
      </section>

      <section className={styles.social} id="social">
        <h1>Estamos no</h1>

        <div className={styles.socialContent}>
          <div className={styles.socialItem}>
            <GithubIcon />
            <a 
              target="_blank"
              href="https://github.com/sussafernandees" rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className={styles.socialItem}>
            <LinkedinIcon />
            <a 
              target="_blank"
              href="https://linkedin.com/in/sussafernandees" rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className={styles.portfolio}>
        <h1>Seção</h1>
        <hr/>

      </section>

      <Footer />
    </>
  );
};
