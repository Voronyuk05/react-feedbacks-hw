
export const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <div className="options">
            <button onClick={() => onLeaveFeedback('good')}>
                Good
            </button>
            <button onClick={() => onLeaveFeedback('neutral')}>
                Neutral
            </button>
            <button onClick={() => onLeaveFeedback('bad')}>
                Bad
            </button>
        </div>
    )
}