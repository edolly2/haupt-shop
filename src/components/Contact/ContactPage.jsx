import PageTitle from '../PageTitle';
import MainLayout from '../../layout/MainLayout';

const ContactPage = () => {
  return (
    <MainLayout>
      <PageTitle text='Contact The Shop' />
      <iframe
        title='Directions to the Haupt Shop'
        src='https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d774311.1105243257!2d-97.03272047868208!3d40.70364424664316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d41.1303936!2d-95.96108799999999!4m5!1s0x879643af6e204963%3A0x6a61d0c25986dabb!2shaupt%20shop%20beatrice%20ne!3m2!1d40.2663064!2d-96.7772145!5e0!3m2!1sen!2sus!4v1677564549732!5m2!1sen!2sus'
        width='400'
        height='300'
        // style='border:0;'
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </MainLayout>
  );
};

export default ContactPage;
