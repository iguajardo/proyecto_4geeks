import React, { useContext } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Context } from '../store/appContext';
import '../styles/calendar.css'


const Calendario = () => {

    const { store, actions } = useContext(Context);

    function renderDay(day) {

        let color = store.calendar[day.setHours(0, 0, 0, 0)] || "FloralWhite";

        function addColor() {
            actions.changeCalendar({
                [day.valueOf()]: "red"
            })
        }

        return (
            <div
                className="day"
                style={{ backgroundColor: color }}
                onClick={addColor}
            ></div>
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