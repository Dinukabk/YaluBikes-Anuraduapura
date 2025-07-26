import { Table, Badge } from 'react-bootstrap';
import { useGetUsers } from '../adminAPI';

export default function UserList() {
  const { data: users, isLoading } = useGetUsers();

  if (isLoading) return <div>Loading users...</div>;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users?.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Badge bg={user.role === 'admin' ? 'primary' : 'secondary'}>
                {user.role}
              </Badge>
            </td>
            <td>
              <Badge bg={user.isActive ? 'success' : 'danger'}>
                {user.isActive ? 'Active' : 'Inactive'}
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}