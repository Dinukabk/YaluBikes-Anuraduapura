import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import AdminStats from '../components/AdminStats';
import BookingTable from '../components/BookingTable';
import UserList from '../components/UserList';

export default function AdminDashboard() {
  return (
    <Container fluid className="py-4">
      <Row>
        <Col>
          <h2 className="mb-4">Admin Dashboard</h2>
          <AdminStats />
          
          <Tabs defaultActiveKey="bookings" className="mb-3">
            <Tab eventKey="bookings" title="Bookings">
              <BookingTable />
            </Tab>
            <Tab eventKey="users" title="Users">
              <UserList />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}