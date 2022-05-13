import Navbar from '../components/navbar';
import { Title } from '../components/header';
import RoomCard from '../components/roomCard';

export default function Home() {
  return (
    <>
      <div>
        <Title>Rooms</Title>
        <RoomCard></RoomCard>
      </div>
      <Navbar></Navbar>
    </>
  );
}
