export const Statistics = ({good, bad, neutral, total, positivePercentage}) => {
    return (
        <div className='statistics'>
            <p>Good: <span>{good}</span></p>
            <p>Neutral: <span>{neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
            <p>Total: <span>{total}</span></p>
            <p>Positive feedback: <span>{positivePercentage}%</span></p>
        </div>
    )
}