import './ButtonStyles.css'


export const buttonStyles = {
    secondary :'header__nav__item__link--sec'
}

const Button = ({children,buttonType})=>{
    
    return(
        <a href='/login' className={`header__nav__item__link ${ buttonType===buttonStyles.secondary? buttonStyles.secondary: "" }`}>{children}</a>
    )
    
    
}

export default Button