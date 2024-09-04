import dots from '../../assets/dots.svg'
import PropTypes from 'prop-types';

const CardTitle = (props) => {
    return (
        <div className="title d-flex align-items-center justify-content-between">
            <h2>{props.title}</h2>
            <img src={dots} alt="Dots" />
        </div>
    )
}

CardTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default CardTitle
