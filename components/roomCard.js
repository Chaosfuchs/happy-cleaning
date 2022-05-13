import styled, { css } from 'styled-components';
import { useState } from 'react';

export default function RoomCard() {
  const [card, setCard] = useState([
    { name: 'Kitchen', isChecked: false, mate: null },
    { name: 'Floor', isChecked: false, mate: null },
    { name: 'Bathroom', isChecked: false, mate: null },
  ]);

  return (
    <>
      {card.map(({ name, isChecked, mate }) => {
        return (
          <StyledContainerRooms>
            <h2>{name}</h2>
            {mate ? (
              <img src={mate?.image} />
            ) : (
              <StyledCheck variant="filler"></StyledCheck>
            )}
            <StyledCheck></StyledCheck>
          </StyledContainerRooms>
        );
      })}
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
    flex-grow: 2;
  }
`;

const StyledCheck = styled.div`
  width: 30px;
  height: 30px;
  margin: 20px;
  background-color: red;
  border-radius: 999px;
  border: 2px solid black;

  ${({ variant }) =>
    variant === 'filler' &&
    css`
      background-color: grey;
    `}
`;
