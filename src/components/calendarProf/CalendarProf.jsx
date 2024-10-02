import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import esLocale from '@fullcalendar/core/locales/es'; 
import './CalendarProf.css'

const CalendarProf = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const fetchEvents = async () => {
        const mockData = [
            { title: 'Evento 1', date: '2024-10-05', description: 'Descripción del evento 1' },
            { title: 'Evento 2', date: '2024-10-15', description: 'Descripción del evento 2' },
            { title: 'Evento 3', date: '2024-10-21', description: 'Descripción del evento 3' },
        ];
        setEvents(mockData);
    };


    useEffect(() => {
        fetchEvents();
    }, []);


    const handleEventClick = (info) => {
        const { title, extendedProps } = info.event; 
        const description = extendedProps.description; 
        setSelectedEvent({ title, description }); 
    };

    return (
        <div className="container mx-auto p-4">
            <FullCalendar
                plugins={[dayGridPlugin]} 
                initialView="dayGridMonth"
                events={events} 
                eventClick={handleEventClick} 
                eventContent={renderEventContent} 
                locales={[esLocale]} 
                locale="es" 
            />
            {selectedEvent && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h3 className="text-lg font-semibold">{selectedEvent.title}</h3>
                        <p>{selectedEvent.description}</p>
                        <button
                            className="mt-4 px-4 py-2 text-sm text-white bg-yellow-400 rounded hover:bg-yellow-500"
                            onClick={() => setSelectedEvent(null)} // Para cerrar la descripción
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Función opcional para renderizar el contenido del evento
const renderEventContent = (eventInfo) => {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );
}

export default CalendarProf;
