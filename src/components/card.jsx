// Задание 1

export default function Card ({props, children}) {
    return (
        <div className="card">
            <div className='optional-img'>
                {children}
            </div>
            <div className="card-body">
                <h5>{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn">Go somewhere</a>
            </div>
        </div>
    )
}