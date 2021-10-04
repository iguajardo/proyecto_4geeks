import React, { useContext, useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { useColors } from '../hooks/useColors';
import { Context } from '../store/appContext';
import '../styles/calendar.css';
import { CategoriaColores } from './CategoriaColores'


const Calendario = () => {

    const { store, actions } = useContext(Context);
    const [categoria, setCategoria] = useState("")
    const [pickedCategory, handleChange] = useColors("")

    function renderDay(day) {

        let category = store.calendar[day.setHours(0, 0, 0, 0)];

        function addColor() {
            if (!pickedCategory) return;
            actions.changeCalendar({
                [day.valueOf()]: pickedCategory
            })
        }

        return (
            <div
                className="day"
                style={{ backgroundColor: store.categorias[category] || "white" }}
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
            <CategoriaColores onChange={handleChange} />
        </div>
    )
}

export default Calendario