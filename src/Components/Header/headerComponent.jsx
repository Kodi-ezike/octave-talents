import './headerComponent.css'
import HeaderOptions from '../headerDropOptions/headerDropOptionsomponent'
import InputSearch from '../Input/inputComponent'
import Button, { buttonStyles } from '../Button/ButtonComponent'
import logo from '../../assets/img/OctaveTalentLogo.png'


const Header = ()=>{
    
    return(
         <header>
        <div className="container">
            <div className="hamburger">
                <div className="harmburger__rectangle"></div>
                <div className="harmburger__rectangle"></div>
                <div className="harmburger__rectangle"></div>
            </div>
            
            <div className="header__logo">
                <img src={logo} alt="Logo for octave talents" className="header__logo__img" />
            </div>
            <div className="header__search">
                <HeaderOptions description={"Find Talent"}/>
                <HeaderOptions description={"Find Work"}/>
                <InputSearch/>
            </div>
            <nav className="header__nav">
                <ul>
                    <li className="header__nav__item"><Button>Log In</Button></li> 
                    <li className="header__nav__item"><Button buttonType={buttonStyles.secondary}>Sign Up</Button></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header