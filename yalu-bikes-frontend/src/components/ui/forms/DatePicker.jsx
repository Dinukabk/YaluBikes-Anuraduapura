import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextInput from './TextInput';

export default function CustomDatePicker({ label, selected, onChange, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="date-picker-wrapper">
      {label && <label className="form-label">{label}</label>}
      <DatePicker
        customInput={<TextInput />}
        selected={selected}
        onChange={onChange}
        open={isOpen}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onClickOutside={() => setIsOpen(false)}
        {...props}
      />
    </div>
  );
}