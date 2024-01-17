import { FC, ReactNode } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

type ModalProps = {
    children: ReactNode;
    isOpen: boolean;
    onRequestClose: () => void
}

const Modal:FC<ModalProps> = ({ children, onRequestClose, isOpen }) => {   

  return (
   <ReactModal style={{
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.35)'
      },
      content: {
        position: 'absolute',
        top: '200px',
        left: '350px',
        right: '350px',
        bottom: '200px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      }
   }} isOpen={isOpen} onRequestClose={onRequestClose}>
    {children}
   </ReactModal>
  )
}

export default Modal