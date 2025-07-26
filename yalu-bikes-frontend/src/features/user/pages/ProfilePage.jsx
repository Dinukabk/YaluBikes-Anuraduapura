import { useEffect } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../userAPI';
import ProfileCard from '../components/ProfileCard';
import EditProfileForm from '../components/EditProfileForm';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  return (
    <Container className="py-4">
      <h2>My Profile</h2>
      <Tabs defaultActiveKey="profile" className="mb-3">
        <Tab eventKey="profile" title="Profile">
          {profile && <ProfileCard user={profile} />}
        </Tab>
        <Tab eventKey="edit" title="Edit Profile">
          {profile && <EditProfileForm user={profile} />}
        </Tab>
      </Tabs>
    </Container>
  );
}