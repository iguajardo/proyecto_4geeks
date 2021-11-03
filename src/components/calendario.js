import React, { useContext, useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { useColors } from '../hooks/useColors';
import { Context } from '../store/appContext';
import '../styles/calendar.css';
import { CategoriaColores } from './CategoriaColores'


const Calendario = () => {

    const { store } = useContext(Context);
    const [, handleChange,] = useColors("");
    const [activeDay, setActiveDay] = useState(null);
    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('activeDay')) {
            setActiveDay(JSON.parse(localStorage.getItem('activeDay')))
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem('btnSaveStatus') !== null) {
            setIsDisabled(JSON.parse(localStorage.getItem('btnSaveStatus')))
        }
    }, [])

    function renderDay(day) {

        const numberDate = day.setHours(0, 0, 0, 0)
        const category = store.calendar[numberDate];

        function changeActive() {
            setActiveDay(numberDate)
            localStorage.setItem('activeDay', numberDate)
        }

        const cellStyle = {
            height: 60,
            width: 60,
            position: 'relative',
            margin: 2
        };

        return (
            <div
                className="day"
                style={{
                    backgroundColor: store.categorias[category] || "rgb(240, 240, 240)",
                    border: (activeDay === numberDate ? "3px solid #00BFFF" : "none"),
                    ...cellStyle
                }}
                onClick={changeActive}
            >{day.getDate()}</div>
        );
    }


    return (
        <div className="row calendar-container mb-5 gx">
            <div className="col-12 col-lg-9 col-xl-8 col-xxl-7 calendar-div d-flex flex-wrap">
                <DayPicker
                    renderDay={renderDay}
                    numberOfMonths={1}
                />
                <div className="mt-5">
                    <CategoriaColores onChange={handleChange} value={activeDay} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
                </div>
            </div>
        </div>
    )
}

export default Calendario