import Header from '../Header/Header'
import './Button.css'
import whiteArrow from '../../assets/whitearrow.svg'

function Button ({arrow, buttonStyle, loading, children , ...props}) {
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={whiteArrow}/>}
        </button>
    )
}

export default Button