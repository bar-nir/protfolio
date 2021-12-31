import './Card.css';
function Card(props) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-front">
                    <figure><img src = {props.img} alt ="nothing"></img></figure>
                </div>
                <div className="card-back">
                    {props.name}
                </div>
            </div>
        </div>    
    );
}
export default Card;