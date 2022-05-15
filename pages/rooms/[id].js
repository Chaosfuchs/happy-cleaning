import Navbar from '../../components/navbar';
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

  useEffect(() => {
    setRoom(rooms.find(room_ => room_.id === id));
  }, [setRoom, rooms, id]);

  return (
    <>
      {room && (
        <div>
          <Link passHref href="/">
            {'<- Back'}
          </Link>
          <Title>{room.name}</Title>
          {JSON.stringify(query, null, 2)}
        </div>
      )}
      ;<Navbar></Navbar>
    </>
  );
}
