import PageTitle from '../components/PageTitle';
import MainLayout from '../layout/MainLayout';

const ServicesPage = () => {
  return (
    <MainLayout>
      <PageTitle text='What We Do' />
      <ul>
        <li>Car Sales</li>
        <li>Towing</li>
        <li>Car Inspections</li>
        <li>Custom Paint Jobs</li>
        <li>Free Estimates</li>
        <li>Custom Fabrication</li>
        <li>Vehicle Restoration</li>
        <li>Auto Repair</li>
        <li>Body Work</li>
      </ul>
    </MainLayout>
  );
};

export default ServicesPage;
