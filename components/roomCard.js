import styled from 'styled-components';

export default function RoomCard() {
  return (
    <>
      <StyledContainerRooms>
        <h2>Kitchen</h2>

        <StyledCheckButton></StyledCheckButton>
      </StyledContainerRooms>
    </>
  );
}

const StyledContainerRooms = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  border: 2px solid black;

  h2 {
    margin: 20px;
  }
`;

const StyledCheckButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 20px;
  background-color: red;
  border-radius: 999px;
`;
