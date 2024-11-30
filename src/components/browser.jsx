// Задание 2 вынесено в отдельный компонент, показывающий все содержимое предполагаемой страницы

import NewsTags from "./newsTags";
import News from "./news";
import Money from "./money";
import Tags from "./tags";
import Search from "./search";
import Ad from "./ad";
import Section from "./section";

export default function Browser() {
    const newsContent = {
        icon: "https://s1.iconbird.com/ico/2013/8/428/w256h2561377930298catwalk.png",
        text: "lorem ipsum dolor sit amet"
    }

    const usd ={
        currency: "USD",
        cost: "63,52",
        dinamic: "+0,09"
    }

    const eur ={
        currency: "EUR",
        cost: "70,86",
        dinamic: "+0,14"
    }

    const oil ={
        currency: "НЕФТЬ",
        cost: "64,90",
        dinamic: "+1,63%"
    }

    return (
        <div className="browser">
            <div className="news-tags-list widget">
                <NewsTags name='Сейчас в СМИ'></NewsTags>
                <NewsTags name='в Германии'></NewsTags>
                <NewsTags name='Рекомендуем'></NewsTags>
            </div>
            <div className="news-list widget">
                <News props={newsContent}></News>
                <News props={newsContent}></News>
                <News props={newsContent}></News>
                <News props={newsContent}></News>
            </div>
            <div className="money-list widget">
                <Money props={usd}></Money>
                <Money props={eur}></Money>
                <Money props={oil}></Money>
            </div>
            <div className="tags-list widget">
                <Tags name='Видео'></Tags>
                <Tags name='Картинки'></Tags>
                <Tags name='Карты'></Tags>
                <Tags name='Маркет'></Tags>
                <Tags name='Переводчик'></Tags>
                <Tags name='Эфир'></Tags>
            </div>
            <div className="widget"><Search></Search></div>
            <Ad link="https://img.freepik.com/free-photo/vertical-fulllength-portrait-cheerful-redhead-excited-girl-jumping-feeling-happy-smiling-gazing-camera-carefree-cant-wait-open-presents-winter-holidays-party-orange-background_1258-309893.jpg?t=st=1733001606~exp=1733005206~hmac=2396619015b851e34d595f8f9456477df1b59eca224dfab9cc9bdef07b677a1c&w=1800"></Ad>
            <div className="section-list widget">
                <Section title="Погода">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nesciunt ab rem accusamus qui numquam placeat provident? Tempora voluptatum non amet odit esse. Doloremque accusantium beatae voluptatem voluptatibus dolorum ea!</p>
                </Section>
                <Section title="Посещаемое">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nesciunt ab rem accusamus qui numquam placeat provident? Tempora voluptatum non amet odit esse. Doloremque accusantium beatae voluptatem voluptatibus dolorum ea!</p>
                </Section>
                <Section title="И так далее">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nesciunt ab rem accusamus qui numquam placeat provident? Tempora voluptatum non amet odit esse. Doloremque accusantium beatae voluptatem voluptatibus dolorum ea!</p>
                </Section>
            </div>
        </div>
    )
}