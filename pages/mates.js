import Navbar from '../components/navbar';
import { Title } from '../components/header';
import MateCard from '../components/mateCard';

export default function Home() {
  return (
    <>
      <div>
        <Title>Flat Mates</Title>
        <MateCard />
      </div>
      <Navbar></Navbar>
    </>
  );
}
