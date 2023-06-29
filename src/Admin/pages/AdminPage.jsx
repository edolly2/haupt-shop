import PageLayout from '../../components/Layout/PageLayout';
import AdminSignIn from '../components/SignIn/AdminSignIn';

const AdminPage = () => {
  return (
    <PageLayout>
      <AdminPage style={{ background: 'white' }}>
        <AdminSignIn />
      </AdminPage>
    </PageLayout>
  );
};
export default AdminPage;
