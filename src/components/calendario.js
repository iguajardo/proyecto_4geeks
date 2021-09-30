import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../styles/calendar.css'


const Calendario = () => {

    const colors = ['#C7CEEA', '#B5EAD7', '#E2F0CB', '#FFDAC1', '#FFB7B2', '#FF9AA2'];

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function renderDay(day) {
        // const date = day.getDate();
        day.setHours(0, 0, 0, 0);

        let color = '';

        if (day.getTime() == today.getTime()) {
            color = 'black';
        }
        else {
            color = colors[getRandomInt(6)];
        }

        return (
            <div className="day" style={{ backgroundColor: color }}></div>
        );
    }

    return (
        <DayPicker
            renderDay={renderDay}
            numberOfMonths={1}
        />
    )

}

export default Calendario