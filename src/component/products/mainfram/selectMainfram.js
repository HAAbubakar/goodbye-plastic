import React,{useState} from 'react';
import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
function SelectMainfram() {
    const [value, setValue] = useState()
    const handleChange = (data) => {
        setValue(data)
    }
    return (
        <Select
          value={value}
          onChange={handleChange}
          options={options}
        />
    )
}

export default SelectMainfram