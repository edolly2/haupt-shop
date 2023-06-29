import MainLayout from '../components/Layout/MainLayout';
import PageTitle from '../components/PageTitle';
// import Section from '../Layout/Section/Section';
import Section from '../components/Layout/Section/Section';
import SchedulerComponent from './SchedulerComponent';

const SchedulerPage = () => {
  return (
    <MainLayout>
      <PageTitle text='Schedule a Visit' />
      <Section>
        <SchedulerComponent />
      </Section>
    </MainLayout>
  );
};

export default SchedulerPage;
