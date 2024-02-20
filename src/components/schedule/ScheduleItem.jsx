import React from 'react';

const ScheduleItem = ({ dia, horas }) => (
  <div>
    <h3>{dia}</h3>
    <p>{horas}</p>
  </div>
);

export default ScheduleItem;