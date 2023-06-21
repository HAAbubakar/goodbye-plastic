import React,{useState} from 'react';
import Select from 'react-select';



function SelectMainfram({options}) {
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