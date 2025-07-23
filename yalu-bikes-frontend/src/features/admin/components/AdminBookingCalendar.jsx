import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useAdminBookings } from '../adminAPI';

const localizer = momentLocalizer(moment);

export default function AdminBookingCalendar() {
  const { data: bookings, isLoading } = useAdminBookings();

  const events = bookings?.map(booking => ({
    title: `${booking.bike.model} - ${booking.user.name}`,
    start: new Date(booking.startDate),
    end: new Date(booking.endDate),
    status: booking.status
  })) || [];

  const eventStyleGetter = (event) => {
    const backgroundColor = 
      event.status === 'confirmed' ? '#3174ad' :
      event.status === 'pending' ? '#f0ad4e' :
      '#d9534f';
    
    return { style: { backgroundColor } };
  };

  if (isLoading) return <div>Loading calendar...</div>;

  return (
    <div style={{ height: 700 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
}