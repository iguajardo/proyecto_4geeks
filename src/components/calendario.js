import React, { useContext, useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { useColors } from '../hooks/useColors';
import { Context } from '../store/appContext';
import '../styles/calendar.css';
import { CategoriaColores } from './CategoriaColores'


const Calendario = () => {

    const { store, actions } = useContext(Context);
    const [, handleChange,] = useColors("");
    const [activeDay, setActiveDay] = useState(null);

    useEffect(() => {
        if (localStorage.getItem('activeDay')) {
            setActiveDay(JSON.parse(localStorage.getItem('activeDay')))
        }
    }, [])

    function renderDay(day) {

        const numberDate = day.setHours(0, 0, 0, 0)
        const category = store.calendar[numberDate];

        function changeActive() {
            setActiveDay(numberDate)
            localStorage.setItem('activeDay', numberDate)
        }

        return (
            <div
                className="day"
                style={{
                    backgroundColor: store.categorias[category] || "white",
                    border: (activeDay === numberDate ? "3px solid #00BFFF" : "none")
                }}
                onClick={changeActive}
            ></div>
        );
    }

    return (
        <div className="">
            <DayPicker
                renderDay={renderDay}
                numberOfMonths={1}
            />
            <CategoriaColores onChange={handleChange} value={activeDay} />
        </div>
    )
}

export default Calendario