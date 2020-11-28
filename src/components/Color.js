import React, { useState } from 'react';
import Dropdown from './Dropdown'

const options = [
    {
        label: 'Color Red',
        value: 'red'
    },
    {
        label: 'Color Blue',
        value: 'blue'
    },
    {
        label: 'Color Green',
        value: 'green'
    }
]

const Color = () => {
    const [selected, setSelected] = useState(options[0]); 
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="ui raised segment">
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle DropDown</button>
            {showDropdown ? 
            <div>
                <Dropdown 
                    label="Select a Color"
                    selected={selected} 
                    onSelectedChange={setSelected}
                    options={options} 
                />
                <div className="ui raised segment">
                    <p style={{color: `${selected.value}`}}>The text is {selected.value}</p>
                </div>
            </div>
            : null
            }   
      </div>
    );
};

export default Color;