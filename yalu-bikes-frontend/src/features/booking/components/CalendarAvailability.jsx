import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useGetBookedDates } from '../bookingAPI';

export default function CalendarAvailability({ bikeId }) {
  const [date, setDate] = useState(new Date());
  const { data: bookedDates } = useGetBookedDates(bikeId);

  const tileDisabled = ({ date }) => {
    return bookedDates?.some(
      bookedDate => new Date(bookedDate).toDateString() === date.toDateString()
    );
  };

  return (
    <div className="availability-calendar">
      <Calendar
        onChange={setDate}
        value={date}
        tileDisabled={tileDisabled}
        minDate={new Date()}
      />
    </div>
  );
}