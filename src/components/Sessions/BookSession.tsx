import { FC, useState, useEffect, FormEvent } from 'react'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { type Session, bookSession } from '../../reducers/sessionsSlide'
import { useAppSelector } from '../../hooks/useSelector'
import { useAppDispatch } from '../../hooks/useDispatch'

type BookSessionType = {
    session: Session;
    onClose: () => void;
}

const BookSession:FC<BookSessionType> = ({ session, onClose }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [nameInput, setNameInput] = useState<string>('')
    const [emailInput, setEmailInput] = useState<string>('')
    const dispatch = useAppDispatch()
    const { upcomingSessions } = useAppSelector(state => state.session)
    useEffect(() => {
        setModalOpen(true)
    }, []);

    const handleInput = (value: string) => {
        setNameInput(value);
        setEmailInput(value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            nameInput,
            emailInput
        };
        dispatch(bookSession(session));
        onClose()
        console.log(formData);
        
    }

  return (
    <Modal isOpen={modalOpen} onRequestClose={onClose}>
        <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" value={nameInput} onInputChange={handleInput} type="text" />
        <Input label="Your email" id="email" value={emailInput} onInputChange={handleInput} type="email" />
        <p className="actions">
          <Button type="button" textOnly onClick={onClose}>
            Cancel
          </Button>
          <Button type='submit' textOnly={false}>Book Session</Button>
        </p>
      </form>
    </Modal>
  )
}

export default BookSession