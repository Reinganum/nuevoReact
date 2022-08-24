import {FaWindowClose} from 'react-icons/fa';

const Modal = ({title, close, children}) =>{
    return(

        <div className="modal">
            <div className='modal-title'>
                <h2>{title}</h2>
                <FaWindowClose className='windowClose' onClick={()=>close(false)}/>
            </div>
            {children}
        </div>
    )
}

export default Modal