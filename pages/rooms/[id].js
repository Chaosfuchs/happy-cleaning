import Navbar from '../../components/navbar';
import styled, { css } from 'styled-components';
import { Title } from '../../components/header';
import useStore from '../../hooks/useStore';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Room() {
  const { query } = useRouter();
  const { id } = query;

  const rooms = useStore(state => state.rooms);
  const room = rooms.find(room_ => room_.id === id);
  const toggleStatus = useStore(state => state.toggleStatus);
  const mates = useStore(state => state.mates);
  const chooseMate = useStore(state => state.chooseMate);

  return (
    <StyledRoomContainer>
      {room && (
        <div>
          <StyledLink>
            <Link passHref href="/">
              {'< Back'}
            </Link>
          </StyledLink>
          <Title>{room.name}</Title>
          <StyledDiv>
            <p>Assignee:</p>
            <select onChange={event => chooseMate(room.id, event.target.value)}>
              <option value="">--Please choose a mate--</option>
              {mates.map(mate => {
                return (
                  <option key={mate.id} value={mate.id}>
                    {mate.name}
                  </option>
                );
              })}
            </select>
          </StyledDiv>
          <StyledDiv>
            <p>Status:</p>
            <StyledButton
              onClick={() => toggleStatus(room.id)}
              isChecked={room.isChecked}
            ></StyledButton>
          </StyledDiv>
          <StyledDiv>
            <p>Frequency:</p>
            <p>{room.frequency}</p>
          </StyledDiv>
          <br />
          <StyledText>{room.details}</StyledText>
        </div>
      )}
      <Navbar></Navbar>
    </StyledRoomContainer>
  );
}

const StyledRoomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  p {
    font-size: 30px;
  }

  select {
    height: 40px;
  }
`;

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 20px;
  background-color: red;
  border-radius: 999px;
  border: 2px solid black;

  ${({ isChecked }) =>
    isChecked &&
    css`
      background-color: lightgreen;
    `}
`;

const StyledText = styled.p`
  font-size: 30px;
`;

const StyledLink = styled.div`
  font-size: 20px;
  margin: 20px;
`;
