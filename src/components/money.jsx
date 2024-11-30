// Компонент для курса валют и акций

export default function Money ({props}) {
    return (
        <div className="money">
            <div className="currency">{props.currency}</div>
            <div className="cost">{props.cost}</div>
            <div className="dinamic">{props.dinamic}</div>
        </div>
    )
}