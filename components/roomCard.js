import styled, { css } from 'styled-components';
import { useState } from 'react';

export default function RoomCard() {
  const [card, setCard] = useState([
    { id: '0', name: 'Kitchen', isChecked: false, mate: null },
    { id: '1', name: 'Floor', isChecked: false, mate: null },
    { id: '2', name: 'Bathroom', isChecked: true, mate: null },
  ]);

  return (
    <>
      {card.map(({ id, name, isChecked, mate }) => {
        return (
          <StyledContainerRooms key={id}>
            <h2>{name}</h2>
            {mate ? (
              <img src={mate?.image} />
            ) : (
              <StyledCheck variant="filler"></StyledCheck>
            )}
            <StyledCheck isChecked={isChecked}></StyledCheck>
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
  width: 40px;
  height: 40px;
  margin: 20px;
  background-color: red;
  border-radius: 999px;
  border: 2px solid black;

  ${({ variant }) =>
    variant === 'filler' &&
    css`
      background-color: grey;
    `}

  ${({ isChecked }) =>
    isChecked &&
    css`
      background-color: lightgreen;
    `}
`;
