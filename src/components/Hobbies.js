import './Hobbies.css';
import dogs from '../image/dogs.jpeg';
import cats from '../image/cats.jpeg';
import football from '../image/football.jpeg';
import gym from '../image/gym.jpeg';
import netflix from '../image/netflix.jpeg';
import ps5 from '../image/ps5.jpeg';
import Card from './Card';
function Hobbies() {
    return (
        <div>
            <h1 className='HobbisH3'>Hover the hobbies to find out</h1>
            <div className='Grid'>
                <Card name="Dogs" img={dogs} />
                <Card name="Cats" img={cats} />
                <Card name="Gym" img={gym} />
                <Card name="Netflix" img={netflix} />
                <Card name="PS5" img={ps5} />
                <Card name="Football" img={football} />
            </div>
        </div>
    );
}
export default Hobbies;