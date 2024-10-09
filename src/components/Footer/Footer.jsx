import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

// Assets
import './Footer.css'
import Logo from '../../assets/dnc-logo.svg'
import BrasilLogo from '../../assets/brasil.svg'
import UsaLogo from '../../assets/usa.svg'
import Face from '../../assets/facebook.svg'
import Insta from '../../assets/instagram.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Twitter from '../../assets/twitter.svg'

// COMPONENTS
import Button from '../Button/Button'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'



function Footer () {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                    <img src={Logo} className='footer-logo'/>
                    <p className='gray-l-color'>{appContext.languages[appContext.language].general.footerLogoText}</p>
                    <div className="d-flex social-links">
                        <a href="https://facebook.com.br" target='_blank'>
                            <img src={Face} alt="" />
                        </a>
                        <a href="https://facebook.com.br" target='_blank'>
                            <img src={Insta} alt="" />
                        </a>
                        <a href="https://facebook.com.br" target='_blank'>
                            <img src={LinkedIn} alt="" />
                        </a>
                        <a href="https://facebook.com.br" target='_blank'>
                            <img src={Twitter} alt="" />
                        </a>
                    </div>
                    </div>
                    <div className='d-flex mobile-fd-column'>
                        <div className='footer-col'>
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>Contact</h3>
                            <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className='grey-1-color'>suporte@escoladnc.com.br</p>
                            <p className='grey-1-color'>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>   
                <div className='d-flex jc-space-between footer-copy'>
                    <p className='grey-l-color'>Copyright © DNC - 2024</p>
                    <div className='langs-area d-flex'>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage("br") }>
                            <img src={BrasilLogo} height="29px" />
                        </Button>
                        <Button onClick={() => changeLanguage("en")}>
                            <img src={UsaLogo} height="29px" />
                        </Button>
                        
                    </div>
                </div>             
            </div>
        </footer>
    )
}

export default Footer