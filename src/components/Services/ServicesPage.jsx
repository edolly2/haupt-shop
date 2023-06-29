import PageTitle from '../PageTitle';
import MainLayout from '../Layout/MainLayout';
import styled from 'styled-components';
import SectionTitle from '../Layout/Section/SectionTitle';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(96, 96, 96, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(33, 33, 33, 0.9);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 3%;
  gap: 2.4rem;
`;

const ColLeft = styled.div`
  /* width: 100%; */
  padding-right: 50%;
  display: flex;
  @media screen and (max-width: 768px) {
    padding-right: 0;
    flex-direction: column;
  }
`;
const ColRight = styled.div`
  /* width: 100%; */
  padding-left: 50%;
  display: flex;
  @media screen and (max-width: 768px) {
    padding-left: 0;
    flex-direction: column;
  }
  /* align-self: flex-end; */
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3%;
  color: #b8cad2;
`;

const ServicesPage = () => {
  return (
    <MainLayout>
      <PageTitle text='What We Do' />
      <Container>
        <ColLeft>
          <img src='https://via.placeholder.com/150' alt='#' />
          <InfoWrapper>
            <SectionTitle title='Car Sales' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ullam sit itaque voluptatum molestias nesciunt
              deserunt pariatur minus dolorum earum.
            </p>
          </InfoWrapper>
        </ColLeft>
        <ColRight>
          <img src='https://via.placeholder.com/150' alt='#' />
          <InfoWrapper>
            <SectionTitle title='Towing' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ullam sit itaque voluptatum molestias nesciunt
              deserunt pariatur minus dolorum earum.
            </p>
          </InfoWrapper>
        </ColRight>
        <ColLeft>
          <img src='https://via.placeholder.com/150' alt='#' />
          <InfoWrapper>
            <SectionTitle title='Car Inspections' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ullam sit itaque voluptatum molestias nesciunt
              deserunt pariatur minus dolorum earum.
            </p>
          </InfoWrapper>
        </ColLeft>
        <ColRight>
          <img src='https://via.placeholder.com/150' alt='#' />
          <InfoWrapper>
            <SectionTitle title='Custom Paint Jobs' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ullam sit itaque voluptatum molestias nesciunt
              deserunt pariatur minus dolorum earum.
            </p>
          </InfoWrapper>
        </ColRight>
        <ColLeft>
          <img src='https://via.placeholder.com/150' alt='#' />
          <InfoWrapper>
            <SectionTitle title='Free Estimates' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ullam sit itaque voluptatum molestias nesciunt
              deserunt pariatur minus dolorum earum.
            </p>
          </InfoWrapper>
        </ColLeft>
        <ColRight>
          <img src='https://via.placeholder.com/150' alt='#' />
          <InfoWrapper>
            <SectionTitle title='Custom Fabrication' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ullam sit itaque voluptatum molestias nesciunt
              deserunt pariatur minus dolorum earum.
            </p>
          </InfoWrapper>
        </ColRight>
        <ColLeft>
          <img src='https://via.placeholder.com/150' alt='#' />
          <InfoWrapper>
            <SectionTitle title='Vehicle Restoration' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ullam sit itaque voluptatum molestias nesciunt
              deserunt pariatur minus dolorum earum.
            </p>
          </InfoWrapper>
        </ColLeft>
        <ColRight>
          <img src='https://via.placeholder.com/150' alt='#' />
          <InfoWrapper>
            <SectionTitle title='Auto Repair' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ullam sit itaque voluptatum molestias nesciunt
              deserunt pariatur minus dolorum earum.
            </p>
          </InfoWrapper>
        </ColRight>
        <ColLeft>
          <img src='https://via.placeholder.com/150' alt='#' />
          <InfoWrapper>
            <SectionTitle title='Body Work' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ullam sit itaque voluptatum molestias nesciunt
              deserunt pariatur minus dolorum earum.
            </p>
          </InfoWrapper>
        </ColLeft>
      </Container>
    </MainLayout>
  );
};

export default ServicesPage;
