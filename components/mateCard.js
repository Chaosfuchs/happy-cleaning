import styled, { css } from 'styled-components';
import useStore from '../hooks/useStore';

export default function MateCard() {
  const mates = useStore(state => state.mates);
  const toggle = useStore(state => state.toggle);
  const rooms = useStore(state => state.rooms);

  return (
    <>
      {mates.map(({ id, name, image, todos, showMe }) => {
        return (
          <StyledContainerMates key={id}>
            <StyledMiniContainer>
              {image ? (
                <img src={image} />
              ) : (
                <StyledFiller variant="filler"></StyledFiller>
              )}
              <h2>{name}</h2>
              <button onClick={() => toggle(id)}></button>
            </StyledMiniContainer>
            <StyledToDoContainer showMe={showMe}>
              <ul>
                <li>
                  {rooms.name} {rooms.isChecked}
                </li>
                <li>
                  {rooms.name} {rooms.isChecked}
                </li>
              </ul>
            </StyledToDoContainer>
          </StyledContainerMates>
        );
      })}
    </>
  );
}

const StyledContainerMates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 20px;
  border: 2px solid black;

  h2 {
    margin: 20px;
    flex-grow: 2;
  }
`;

const StyledMiniContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    position: absolute;
    background-color: transparent;
    background-image: url(/arrow.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0;
    left: 290px;
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: none;
  }
`;

const StyledToDoContainer = styled.div`
  display: ${({ showMe }) => (showMe ? 'block' : 'none')};
`;

const StyledFiller = styled.div`
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
`;
