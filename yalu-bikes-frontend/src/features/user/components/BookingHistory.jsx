import { Card, Table, Badge } from 'react-bootstrap';
import { useUserBookings } from '../userAPI';

export default function BookingHistory() {
  const { data: bookings, isLoading } = useUserBookings();

  if (isLoading) return <div>Loading your bookings...</div>;

  return (
    <Card>
      <Card.Header>
        <h5>Your Bookings</h5>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Bike</th>
              <th>Dates</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map(booking => (
              <tr key={booking._id}>
                <td>{booking.bike.model}</td>
                <td>
                  {new Date(booking.startDate).toLocaleDateString()} - 
                  {new Date(booking.endDate).toLocaleDateString()}
                </td>
                <td>
                  <Badge bg={
                    booking.status === 'confirmed' ? 'success' :
                    booking.status === 'pending' ? 'warning' : 'secondary'
                  }>
                    {booking.status}
                  </Badge>
                </td>
                <td>LKR {booking.totalPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}