import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
const Calender = () => {
    const [date, setDate]=useState(new Date())
    const currentDate = format(date, 'PPP');
    return (
        <div className='container mx-auto grid justify-center pt-16 pb-16 '>
            <div>
            <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
    />
            </div>
    <p className='text-accent'>You just picked {currentDate}</p>
        </div>
    );
};

export default Calender;