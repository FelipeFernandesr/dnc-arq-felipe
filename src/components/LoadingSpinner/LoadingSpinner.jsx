import './LoadingSpinner.css'
import LoadinSpinner from '../../assets/spinner.gif'

function LoadingSpinner() {
    return (
        <div className='d-flex al-center jc-center loading-overlay-container'>
            <img src={LoadinSpinner} alt="Loading" height="80px" />
        </div>
    )
}

export default LoadingSpinner