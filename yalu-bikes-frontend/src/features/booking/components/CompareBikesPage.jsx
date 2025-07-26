import { Table } from 'react-bootstrap';
import { useGetAllBikes } from '../bookingAPI';

export default function CompareBikesPage() {
  const { data: bikes } = useGetAllBikes();

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Model</th>
          <th>Daily Rate</th>
          <th>Engine</th>
          <th>Mileage</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        {bikes?.map(bike => (
          <tr key={bike._id}>
            <td>{bike.model}</td>
            <td>LKR {bike.dailyRate}</td>
            <td>{bike.engineSize}cc</td>
            <td>{bike.mileage} kmpl</td>
            <td>{bike.isAvailable ? 'Available' : 'Booked'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}