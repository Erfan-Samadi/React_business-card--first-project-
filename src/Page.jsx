import { useState } from 'react'
import { createContext } from 'react'
import ReactSwitch from "react-switch"
import './Page.css'
import profilePicture from "./assets/profile-picture.png"
import emailLogo from "./assets/icons8-email-50.png"
import facebookLogo from "./assets/icons8-facebook.svg"
import githubLogo from "./assets/icons8-github.svg"
import instagramLogo from "./assets/icons8-instagram.svg"
import linkedingLogo from "./assets/icons8-linkedin-48.png"
import linkedinFooterLogo from "./assets/icons8-linkedin.svg"

export const ThemeContext = createContext(null)


function Page() {
    const [theme, setTheme] = useState("dark")

    const themeChanger = () => {
        setTheme((current) => (current === "dark" ? "light" : "dark"))
    }
    return (
        <ThemeContext.Provider value={{theme, themeChanger}} >
            <ThemeSwitch onChange={themeChanger} checked={theme === "dark"} />
            
            <div className="container" id={theme}> 
                <Info />
                <About />
                <Intrests />
                <Footer />
            </div>
            
        </ThemeContext.Provider>
    )
}

function Info() {
    const name = "Your Name Here"
    const job = "Your Job Here"
    const website = "Your Website Here"

    function Button( {className, link, src, alt, value} ) {
        return (
            <button className={className} type="button" > <a href={link}> <img src={src} alt={alt} /> {value} </a> </button>
        )
    }
    
    return (
        <section>

            <div className="personal-info">
                <img src={profilePicture} alt="profile picture" className="profile-picture"></img>
                <h1 className="h1"> {name} </h1>
                <p className="job-p"> {job} </p>
                <a  href="#" className="link"> {website} </a>
            </div>
            
            <div className="button-container">
                <Button className="button-email button" src={emailLogo} alt="email icon" value="Email" link="example@gmail.com" />
                <Button className="button-linkedin button" src={linkedingLogo} alt="linkedin icon" value="Linkedin" link="https://www.linkedin.com/" />
            </div>

        </section>
    )
}

function About() {
    return (
        <div className="about-container">
            <MainContent h2Value="About" pValue="Type about yourself" />
        </div>
    )
}

function Intrests() {
    return (
        <div className="interests-container">
            <MainContent h2Value="Intrests" pValue="Type about your intrests" />
        </div>
    )
}

function MainContent(props) {
    return (
        <>
            <h2 className="h2"> {props.h2Value} </h2>
            <p className="p" > {props.pValue} </p>
        </>
    
    )
}

function Footer() {

    function SocialMedia( {href, src, alt} ) {
        return (
            <a href={href} className="social-media" target="_blank"> <img className="icons" src={src} alt={alt} /> </a> 
        )
    }
    
    return (
        <footer className="footer">
            <div className="footer-container">
                <SocialMedia src={facebookLogo} alt="facebook icon" href="https://www.facebook.com/" />
                <SocialMedia src={instagramLogo} alt="instagram icon" href="https://www.instagram.com/" />
                <SocialMedia src={linkedinFooterLogo} alt="linkedin icon" href="https://www.linkedin.com"  />
                <SocialMedia src={githubLogo} alt="github icon" href="https://www.github.com/"  />
            </div>
            <p>Coded By <a href="https://erfansamadi.com/">Erfan Samadi</a> </p>
        </footer>
    )

}

function ThemeSwitch( {onChange, checked} ) {
    return (
        <ReactSwitch onChange={onChange} checked={checked} className="theme" ></ReactSwitch>
    )
}


  
export default Page