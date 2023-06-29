import PageTitle from '../PageTitle';
import QuoteForm from './QuoteForm';
import MainLayout from '../Layout/MainLayout';

const QuotePage = () => {
  return (
    <MainLayout>
      <PageTitle text='Get a Quote' />
      <QuoteForm />
    </MainLayout>
  );
};

export default QuotePage;
