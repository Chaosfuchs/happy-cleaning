import Navbar from '../../components/navbar';
import styled, { css } from 'styled-components';
import { Title } from '../../components/header';
import useStore from '../../hooks/useStore';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Room() {
  const { query } = useRouter();
  const { id } = query;

  const [room, setRoom] = useState(null);
  const rooms = useStore(state => state.rooms);
  const toggleButton = useStore(state => state.toggleButton);

  useEffect(() => {
    setRoom(rooms.find(room_ => room_.id === id));
  }, [setRoom, rooms, id]);

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
            <select>
              <option value="">--Please choose a mate--</option>
              <option value="mate1">Anna</option>
              <option value="mate2">Marvin</option>
              <option value="mate3">Kerstin</option>
            </select>
          </StyledDiv>
          <StyledDiv>
            <p>Status:</p>
            <button isChecked></button>
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

  button {
    height: 50px;
    width: 50px;
    border-radius: 999px;
    border: 2px solid black;
    box-shadow: 2px 2px 2px grey;
    background-color: ${({ isChecked }) => (isChecked ? 'lightgreen' : 'red')};
  }
`;

const StyledText = styled.p`
  font-size: 30px;
`;

const StyledLink = styled.div`
  font-size: 20px;
  margin: 20px;
`;
