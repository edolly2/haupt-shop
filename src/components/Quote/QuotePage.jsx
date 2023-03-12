import MainLayout from '../../Layout/MainLayout';
import PageTitle from '../PageTitle';
import QuoteForm from './QuoteForm';

const QuotePage = () => {
  return (
    <MainLayout>
      <PageTitle text='Get a Quote' />
      <QuoteForm />
    </MainLayout>
  );
};

export default QuotePage;
