import styled from 'styled-components';

const StyleForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 5vw;
    border: 4px dotted;
  }
  div {
    margin-top: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 10vw;
    flex-direction: column;
    align-items: center;
    border: 2px blue dotted;
  }

  input {
    width: 15vw;
    border: 1px solid;
    margin-top: 1%;
  }
`;

export default StyleForm;
