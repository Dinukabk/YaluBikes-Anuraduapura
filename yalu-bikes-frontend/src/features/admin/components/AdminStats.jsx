import { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { getAdminStats } from '../adminAPI';

export default function AdminStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await getAdminStats();
        setStats(data);
      } catch (err) {
        console.error('Failed to load stats:', err);
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  if (loading) return <div>Loading statistics...</div>;
  if (!stats) return <div>Failed to load statistics</div>;

  return (
    <Row className="g-4 mb-4">
      <Col md={4}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title>Total Bookings</Card.Title>
            <Card.Text className="display-6">{stats.totalBookings}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title>Active Rentals</Card.Title>
            <Card.Text className="display-6">{stats.activeRentals}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title>Revenue</Card.Title>
            <Card.Text className="display-6">LKR {stats.revenue.toLocaleString()}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}