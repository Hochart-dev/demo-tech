import styled from 'styled-components';

const StyleMembers = styled.div`
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .memberlist {
    margin-top: 2vw;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1vw;
  }

  .pictures {
    width: 30vw;
    height: 15vw;
  }

  p {
    color: white;
    font-size: 1.8em;
  }
`;

export default StyleMembers;
