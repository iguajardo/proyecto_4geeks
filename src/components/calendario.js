import React, { useContext, useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Context } from '../store/appContext';
import '../styles/calendar.css';
import { CategoriaColores } from './CategoriaColores'


const Calendario = () => {

    const { store, actions } = useContext(Context);
    const [categoria, setCategoria] = useState("")

    function renderDay(day) {

        let color = store.calendar[day.setHours(0, 0, 0, 0)] || "GhostWhite";

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
        <div className="">
            <DayPicker
                renderDay={renderDay}
                numberOfMonths={1}
            />
            <CategoriaColores />
        </div>
    )
}

export default Calendario