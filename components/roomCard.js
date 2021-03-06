import styled, { css } from 'styled-components';
import useStore from '../hooks/useStore';
import Link from 'next/link';

export default function RoomCard() {
  const rooms = useStore(state => state.rooms);

  return (
    <>
      {rooms.map(({ id, name, isChecked, mate }) => {
        return (
          <Link key={id} passHref href={`/rooms/${id}`}>
            <StyledContainerRooms>
              <h2>{name}</h2>
              {mate ? (
                <img src={mate.image} />
              ) : (
                <StyledCheck variant="filler"></StyledCheck>
              )}
              <StyledCheck isChecked={isChecked}></StyledCheck>
            </StyledContainerRooms>
          </Link>
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
