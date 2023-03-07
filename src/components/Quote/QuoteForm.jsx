import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FormGroup = styled.div`
  display: flex;
  gap: 4px;
  /* justify-content: space-between; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.label``;
const Input = styled.input``;
const QuoteForm = () => {
  return (
    <Form>
      {/* Form Progress Bar */}
      <FormGroup>
        <Label htmlFor='fname'>First Name</Label>
        <Input type='text' name='fname' />
        {/* </FormGroup> */}
        {/* <FormGroup> */}
        <Label htmlFor='lname'>Last Name</Label>
        <Input type='text' name='lname' />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='phone'>Phone</Label>
        <Input type='tel' name='phone' />
        {/* </FormGroup> */}
        {/* <FormGroup> */}
        <Label htmlFor='email'>Email</Label>
        <Input type='email' name='email' />
      </FormGroup>
      <FormGroup style={{ flexDirection: 'column' }}>
        <Label htmlFor='file'>Choose Files | Min: 5</Label>
        <Input type='file' name='file' id='file' />
      </FormGroup>
      <FormGroup style={{ flexDirection: 'column' }}>
        <Label htmlFor='description'>Brief Description</Label>
        <textarea name='description' />
      </FormGroup>
      <FormGroup style={{ flexDirection: 'column' }}>
        <Label htmlFor='comments'>Any Other Comments</Label>
        <textarea name='comments' />
      </FormGroup>
      <button>Submit</button>
    </Form>
  );
};

export default QuoteForm;
