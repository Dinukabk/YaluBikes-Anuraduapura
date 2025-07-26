import { Table, Badge, Button } from 'react-bootstrap';
import { useAdminBookings } from '../adminAPI';

export default function BookingTable() {
  const { data: bookings, isLoading, error } = useAdminBookings();

  if (isLoading) return <div>Loading bookings...</div>;
  if (error) return <div>Error loading bookings</div>;

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Bike</th>
          <th>Dates</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bookings?.map(booking => (
          <tr key={booking._id}>
            <td>{booking._id.slice(-6)}</td>
            <td>{booking.user.name}</td>
            <td>{booking.bike.model}</td>
            <td>
              {new Date(booking.startDate).toLocaleDateString()} - 
              {new Date(booking.endDate).toLocaleDateString()}
            </td>
            <td>
              <Badge bg={
                booking.status === 'confirmed' ? 'success' :
                booking.status === 'pending' ? 'warning' : 'danger'
              }>
                {booking.status}
              </Badge>
            </td>
            <td>
              <Button variant="outline-primary" size="sm">
                View
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}