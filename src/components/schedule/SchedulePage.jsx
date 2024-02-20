import React, { useEffect, useState } from 'react';
import { getSchedule } from '../services/api';
import Schedule from '../components/SchedulePage';

const SchedulePage = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const data = await getSchedule();
        setSchedules(data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div>
      <h1>Horarios de Atención</h1>
      {schedules.map((schedule) => (
        <Schedule key={schedule.id} dia={schedule.dia} horas={schedule.horas} />
      ))}
    </div>
  );
};

export default SchedulePage;