//Components
import { Trending } from "../../../../shared/Trending/Trending";
import { Widget } from "../components/widget";

//Types
import { FairytaleType } from "../../../../Types/FairyTaleType";


export const AllFairyTales = () => {

    const fairyTales = [
        {
            id: "1",
            title: "The Little Mermaid",
            theme: "Sea",
            images: {
                main_image: "https://example.com/little-mermaid-main.jpg",
                thumbnail: "https://example.com/little-mermaid-thumbnail.jpg",
                gallery: [
                    "https://example.com/little-mermaid-gallery1.jpg",
                    "https://example.com/little-mermaid-gallery2.jpg"
                ]
            }
        },
        {
            id: "2",
            title: "Cinderella",
            theme: "Adventure",
            images: {
                main_image: "https://example.com/cinderella-main.jpg",
                thumbnail: "https://example.com/cinderella-thumbnail.jpg",
                gallery: [
                    "https://example.com/cinderella-gallery1.jpg",
                    "https://example.com/cinderella-gallery2.jpg"
                ]
            }
        }
    ]

    return (
        <div>
            <h1>All Fairy Tales</h1>
            <p>List of all fairy tales will be displayed here.</p>

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
                            />
                        )
                    })}
                </div>
            </section>
        </div> 
    );
}