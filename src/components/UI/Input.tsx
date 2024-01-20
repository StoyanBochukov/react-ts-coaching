import { ChangeEvent, ComponentPropsWithoutRef, FC } from 'react'
import { useState } from 'react';

type InputProps = {
    label: string;
    id: string;
    // value: string;
    onInputChange: (value: string) => void
} & ComponentPropsWithoutRef<'input'>;

const Input:FC<InputProps> = ({ label, id, onInputChange, ...props }) => {

  const [inputValue, setInputValue] = useState<string>('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
  }

  return (
    <div className='control'>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} {...props} value={inputValue} onChange={handleInput} />
    </div>
  )
}

export default Input