import React from 'react'

import GitItem from '../../components/GitItem'

import ImgProfile from '../../assets/images/Wagner_001.png'
import logoLinkedIn from '../../assets/images/logo_linkedin.png'
import logoGitHub from '../../assets/images/logo_github.png'
import logoInstagram from '../../assets/images/logo_instagram.png'
import logoFacebook from '../../assets/images/logo_facebook.png'

import './styles.css'

const Landing = () => {
    return(
        <div id='page-landing'>
            <div id='page-landing-content' className='container'>
                <div className="page-logo">
                    <p>WagDev</p>
                </div>
                <div className="head-content">
                    <div className="head-profile">
                        <div className="head-img-profile">
                            <img src={ImgProfile} alt="Profile"/>
                        </div>
                    </div>
                    <div className="head-content-profile">
                        <div className="head-saudacao">
                            <p>Olá, sou o Wagner Silva</p>
                            <strong>Fullstack Developer</strong>
                        </div>
                        <div className="head-contato">
                            <div className="contate">Contate-me</div>
                            <div className="contate-content">
                                <a href='https://www.linkedin.com/in/wagnerjps' rel="noopener noreferrer" target="_blank">
                                    <img src={logoLinkedIn} alt="https://www.linkedin.com/in/wagnerjps"/>
                                </a>
                                <a href='https://github.com/wagnerjps' rel="noopener noreferrer" target="_blank">
                                    <img src={logoGitHub} alt="https://github.com/wagnerjps"/>
                                </a>
                                <a href='https://www.instagram.com/wagnerjps/' rel="noopener noreferrer" target="_blank">
                                    <img src={logoInstagram} alt="https://www.instagram.com/wagnerjps/"/>
                                </a>
                                <a href='https://www.facebook.com/wagnerjps' rel="noopener noreferrer" target="_blank">
                                    <img src={logoFacebook} alt="https://www.facebook.com/wagnerjps"/>
                                </a>
                                <p>Ou pelo e-mail: <a href="mailto:wagnejps@gmail.com">wagnejps@gmail.com</a></p>
                            </div>
                        </div>
                    </div>                   
                </div>

                <div className="about-content">
                    <p>Sou um entusiasta e apaixonado tecnologia. Estou sempre buscando aprender as 
                    melhores tecnicas e ferramentas de desenvolvimento. Sou capaz de trabalhar em 
                    todas as camadas de um aplicativo (também conhecido como Fullstack Developer) 
                    e também tenho uma boa perspectiva sobre marketing, produto, UX e visão dele.</p>
                    <p>A WagDev é um projeto de uma agência de desenvolvimento voltada para
                    aplicações Web e é um sonho meu em que estou trabalhando para torná-la
                    Realidade. A ideai é ter qualidade, velocidade e desempenho nas aplicações e
                    ajudar nosso clientes com soluções préticas, utilizando o que há as tecnologias
                    mais novas e arrojadas do mercado.</p>
                </div>

                <div className="education-container">
                    <div className="education-head">Minha Formação</div>
                    <div className="education-content">
                        <h2>BACHARELADO</h2>
                        <p>CIÊNCIAS DA COMPUTAÇÃO</p>
                        <p>UNINOVE - Centro Universitário Nove de Julho</p>
                        <span>2008 - 2012 (Trancado)</span>
                    </div>
                </div>

                <div className="contribuition-container">
                    <div className="contribuition-head">Contribuições Técnicas</div>
                    <div className="contribuition-content">
                        <p>Estatísticas Github: 000 / 000 de / 000</p>
                        <div className="git-itens">
                            <GitItem />
                            <GitItem />
                            <GitItem />
                            <GitItem />
                            <GitItem />
                            <GitItem />
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="footer-content">
                    Desenvolvido por Wagner Silva
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Landing