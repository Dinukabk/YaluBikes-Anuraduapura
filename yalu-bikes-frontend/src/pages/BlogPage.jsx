import { Container, Card, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const blogPosts = [
  {
    id: 1,
    title: 'Exploring Anuradhapura',
    excerpt: 'Best routes for bike tours',
    date: '2023-05-15'
  },
  // Add more posts...
];

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4">
      <h2>{t('blog.title')}</h2>
      <Row xs={1} md={2} lg={3} className="g-4 mt-3">
        {blogPosts.map(post => (
          <Col key={post.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
                <Card.Text className="text-muted small">
                  {new Date(post.date).toLocaleDateString()}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}