import './index.scss';
import LogoS from '../../../assets/images/logoSami.png'
import mySVG from '../../../assets/images/image2vector.svg'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoS} />
        </div>


    )
}
export default Logo