// Компонент для блока новостей, состоит из иконки и ссылки

export default function News ({props}) {
    return (
        <div className="news">
            <img className="img-news" src={props.icon}></img>
            <a className="news-href" href="#">{props.text}</a>
        </div>
    )
}