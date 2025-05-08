import { useParams } from "react-router";

//Hooks
import { useFairyTaleData } from "~shared/const/hooks/getFairyTaleData.hook";

export const MakingOf = () => {

    const { id } = useParams();
    console.log(id);


    const { data: fairyTales, isLoading } = useFairyTaleData(); 

    const makingOfData = fairyTales?.filter((fairytale) => fairytale.id === id) || [];
    
    const student = makingOfData[0]?.student
    document.title = `Making of ${student}  | Er was eens...`;


    return (
        <div className="outer-wrapper">
            { isLoading ? (
                <p>Loading...</p>
            ) : 
                <>
                    <h1>Making Of</h1>
                    <div className="banner-wrapper">
                        <img src={ makingOfData[0]?.images.thumbnail } alt="banner image of fairytale:" />
                        <div className="banner-wrapper--fairytale-info-wrapper">
                            <h3>{ makingOfData[0]?.title }</h3>
                            <h3>{ makingOfData[0]?.student }</h3>
                        </div>
                    </div>
                    <section>
                        <div className="making-of-wrapper">
                            <div className="making-of-info-wrapper">
                                <div className="making-of-info-wrapper--making-of-info">
                                    <h4>Verhaal</h4>
                                    <p>
                                        { makingOfData[0]?.student }
                                    </p>
                                </div>
                                <div className="making-of-info-wrapper--making-of-info">
                                    <h4>Auteur</h4>
                                    <p>
                                        naam, jaar
                                    </p>
                                    <p>
                                        thema
                                    </p>
                                </div>
                                <div className="button">
                                    <button>Lees meer</button>
                                </div>
                            </div>
                            <div className="making-of-wrapper--image-wrapper">
                                <img src={ makingOfData[0]?.images.main_image } alt="making of image" />
                                <button>view website</button>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h1>Extra info</h1>
                        <div className="extra-info-image-wrapper">
                            <img src="./" alt="image" />
                            <img src="./" alt="image" />
                            <img src="./" alt="image" />
                        </div>
                        <p>
                            Deze illustratie is gemaakt door de illustrator van het verhaal. Het is een afbeelding van de hoofdpersoon in het verhaal, die zich in een magische omgeving bevindt. De kleuren zijn levendig en de details zijn prachtig, waardoor het lijkt alsof je zelf in het verhaal bent beland.
                        </p>
                    </section>
                </>
            
            }
        </div>
    )
}