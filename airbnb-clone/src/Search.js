import React, { useState } from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import Button from '@material-ui/core/Button';

// DATE PICKER COMPONENT
function Search() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }
    
      function handelSelect(ranges) {
          setStartDate(ranges.selection.startDate)
          setEndDate(ranges.selection.endDate)
      }


    return (
        <div className='search'>
             <DateRangePicker
                 ranges={[selectionRange]}
                 onChange={handelSelect}   
            />
            <h2>Number of Guests
                <PeopleIcon />
            </h2>
            <input 
             min={0}
             defaultValue={2}
             type='number' 
            />
            <Button>
                Search Airbnb
            </Button>
        </div>
    )
}

export default Search
