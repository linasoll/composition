// Рекламный баннер

export default function Ad ({link}) {
    return (
    <div className="widget">
        <img className="img-ad" src={link}></img>
    </div>
    )
}