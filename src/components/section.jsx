// Виджеты, куда в качестве чилдрена можно передавать другие компоненты или другое содержимое (Их делать уже не стала, надоело:))

export default function Section ({title, children}) {
    return (
        <div className="section">
            <h4>{title}</h4>
            <div className="section-content">
                {children}
            </div>
        </div>
)
}