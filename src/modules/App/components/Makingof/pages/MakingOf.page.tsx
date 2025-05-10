import clsx from "clsx";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

// Hooks
import { useFairyTaleData } from "~shared/const/hooks/getFairyTaleData.hook";

//Css 
import styles from "./makingOf.module.scss";

export const MakingOf = () => {
    const { id } = useParams();
    console.log(id);

    const { data: fairyTales, isLoading } = useFairyTaleData();

    const makingOfData = fairyTales?.filter((fairytale) => fairytale.id === id) || [];

    const student = makingOfData[0]?.student;
    document.title = `Making of ${student} | Er was eens...`;


    const [descriptionState, setDescriptionState] = useState<boolean>(false);
    const [pageStyling, setPageStyling] = useState<string>("");
    const [description, setDescription] = useState<string>(`<strong>Verhaal</strong> <br> ${makingOfData[0]?.description.verhaal}`);
    const [buttonText, setButtonText] = useState<string>("Lees meer");

    useEffect(() => {
        const story = makingOfData[0]?.description.verhaal;
        const effect = makingOfData[0]?.description.parallax_effect;
    
        if (descriptionState) {
            setDescription(`<strong>Verhaal</strong> <br> ${story} <br><br> <strong>Parallax Effect</strong> <br> ${effect}`);
            setButtonText("Lees minder");
            setPageStyling("full-description"); 
        } else {
            setDescription(`<strong>Verhaal</strong> <br> ${story}`);
            setButtonText("Lees meer");
            setPageStyling("");
        }
    }, [descriptionState, makingOfData]);

    const toggleDescriptionState = () => {
        setDescriptionState(!descriptionState);
    }

    return (
        <div className="outer-wrapper">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1>Making Of</h1>
                    <div className="banner-wrapper">
                        <img
                            src={makingOfData[0]?.images.thumbnail}
                            alt="banner image of fairytale"
                            className={clsx(styles["banner-wrapper--image"])}
                        />
                        <div className={clsx(styles["banner-wrapper--fairytale-info-wrapper"])}>
                            <h3>{makingOfData[0]?.title}</h3>
                            <p>{makingOfData[0]?.student}</p>
                        </div>
                    </div>

                    <section>
                        <div className={clsx(styles["making-of-wrapper"], styles[pageStyling])}>
                            <div className={clsx(styles["making-of-wrapper--info-wrapper"])}>
                                <div className={clsx(styles["making-of-wrapper--info-wrapper--info"])}>
                                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                                </div>
                                <div className={clsx(styles["making-of-wrapper--info-wrapper--info"])}>
                                    <h4>Auteur</h4>
                                    <p>{ makingOfData[0]?.storyFrom }</p>
                                    <p>{ makingOfData[0]?.genre }</p>
                                </div>
                                <div className="button">
                                    <button
                                        className="button"
                                        onClick={ toggleDescriptionState }
                                    >{ buttonText } </button>
                                </div>
                            </div>
                            <div className={clsx(styles["making-of-wrapper--spacer"])}></div>
                            <div className={clsx(styles["making-of-wrapper--image-wrapper"])}>
                                <img
                                    className={clsx(styles["making-of-wrapper--image-wrapper--image"])}
                                    src={makingOfData[0]?.images.main_image}
                                    alt="making of image"
                                />
                                <a href="#" target="_blank" className="secundary-button" > View website</a>
                            </div>
                        </div>
                    </section>

                    {/* <section>
                        <h1>Extra info</h1>
                        <div className="extra-info-image-wrapper">
                            {makingOfData[0]?.images.gallery.map((image: { [key: string]: string }, index: number) => (
                                <img
                                    key={index}
                                    src={image[`extra_image_${index + 1}`]}
                                    alt={`extra image ${index + 1}`}
                                />
                            ))}
                        </div>
                        <p>
                            Deze illustratie is gemaakt door de illustrator van het verhaal. Het
                            is een afbeelding van de hoofdpersoon in het verhaal, die zich in een
                            magische omgeving bevindt. De kleuren zijn levendig en de details
                            zijn prachtig, waardoor het lijkt alsof je zelf in het verhaal bent
                            beland.
                        </p>
                    </section> */}
                </>
            )}
        </div>
    );
};