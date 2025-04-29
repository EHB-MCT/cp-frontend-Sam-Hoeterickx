//Components
import { Trending } from "../../../../shared/Trending/Trending";
import { Widget } from "../components/widget";


export const AllFairyTales = () => {

    const fairyTales = [
        {
            id: "1",
            title: "The Little Mermaid",
            student: "Voornaam Achternaam",
            theme: "Sea",
            images: {
                main_image: "temp-image.jpg",
                thumbnail: "temp-image.jpg",
                gallery: [
                    "temp-image.jpg",
                    "temp-image.jpg"
                ]
            }
        },
        {
            id: "2",
            title: "Cinderella",
            student: "Voornaam Achternaam",
            theme: "Adventure",
            images: {
                main_image: "temp-image.jpg",
                thumbnail: "temp-image.jpg",
                gallery: [
                    "temp-image.jpg",
                    "temp-image.jpg"
                ]
            }
        },
        {
            id: "3",
            title: "Cinderella",
            student: "Voornaam Achternaam",
            theme: "Adventure",
            images: {
                main_image: "temp-image.jpg",
                thumbnail: "temp-image.jpg",
                gallery: [
                    "temp-image.jpg",
                    "temp-image.jpg"
                ]
            }
        },
        {
            id: "4",
            title: "Cinderella",
            student: "Voornaam Achternaam",
            theme: "Adventure",
            images: {
                main_image: "temp-image.jpg",
                thumbnail: "temp-image.jpg",
                gallery: [
                    "temp-image.jpg",
                    "temp-image.jpg"
                ]
            }
        }
    ]

    return (
        <div className="outer-wrapper">

            <Trending
                data={ fairyTales }
            />

            <section className="story-section">
                <h2>Storys</h2>
                <div className="widget-wrapper">
                    { fairyTales.map((fairytale) => {
                        return (
                            <Widget
                                key={ fairytale.id }
                                id={ fairytale.id }
                                title={ fairytale.title }
                                theme={ fairytale.theme }
                                image={ fairytale.images.main_image }
                                student={ fairytale.student }
                            />
                        )
                    })}
                </div>
            </section>
        </div> 
    );
}