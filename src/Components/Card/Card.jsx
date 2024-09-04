import './Card.css'
import dots from '../../assets/dots.svg'
import PropTypes from 'prop-types';

const Card = (props) => {

    return (
        <div className='card'>
            <div className="title">
                <h2>{props.title}</h2>
                <img src={dots} alt="" />
            </div>
            <div className="content">
                <h2>{props.progress}</h2>
                <img src={props.image} alt="" />
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Card
