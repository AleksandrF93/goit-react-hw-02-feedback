import PropTypes from 'prop-types';
import s from './Statistics.module.css'
export default function Statistics({
  good,
  neutral,
  bad,
  totalFeedbacks,
  positivePercentage,
}) {
    return (
        <div>
            <h2>Statistics</h2>
            <p>Good:<span>{good}</span></p>
            <p>Neutral:<span>{neutral}</span></p>
            <p>Bad:<span>{bad}</span></p>
            <p>Total:<span>{totalFeedbacks}</span></p>
            <p>Positive feedback : <span>{positivePercentage > 0 ? positivePercentage : 0}%</span></p>
        </div>
    );
    
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedbacks: PropTypes.number.isRequired,
    positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};