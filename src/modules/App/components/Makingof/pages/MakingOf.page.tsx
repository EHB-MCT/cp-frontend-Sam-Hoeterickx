import clsx from "clsx";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

// Hooks
import { useFairyTaleData } from "~shared/const/hooks/getFairyTaleData.hook";

//Css 
import styles from "./makingOf.module.scss";

// ...existing imports...

export const MakingOf = () => {
    
    document.body.classList.add('main');

    const { id } = useParams();
    console.log(id);

    const { data: fairyTales, isLoading } = useFairyTaleData();

    const makingOfData = fairyTales?.filter((fairytale) => fairytale.id === id) || [];

    const student = makingOfData[0]?.nameStudent;
    document.title = `Making of ${student} | Er was eens...`;

    const [descriptionState, setDescriptionState] = useState<boolean>(false);
    const [pageStyling, setPageStyling] = useState<string>("");
    const [description, setDescription] = useState<string>(makingOfData[0]?.description || "");
    const [buttonText, setButtonText] = useState<string>("Lees meer");

    useEffect(() => {       
        if (descriptionState) {
            let fullDescription = `
                ${makingOfData[0]?.description} 
            `
            if(makingOfData[0]?.parallaxInfo !== ""){
                fullDescription = `
                    ${makingOfData[0]?.description} 
                    <br> 
                    <br> 
                    <strong>Parallax info</strong>  
                    <br>
                    ${makingOfData[0]?.parallaxInfo}
                `
            }
            setDescription(fullDescription);
            setButtonText("Lees minder");
            setPageStyling("full-description"); 
        } else {
            setDescription(makingOfData[0]?.description);
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
                            src={makingOfData[0]?.imgBanner}
                            alt="banner image of fairytale"
                            className={clsx(styles["banner-wrapper--image"])}
                        />
                        <div className={clsx(styles["banner-wrapper--fairytale-info-wrapper"])}>
                            <h3>{makingOfData[0]?.fairytale}</h3>
                            <p>{makingOfData[0]?.nameStudent}</p>
                        </div>
                    </div>

                    <section>
                        <div className={clsx(styles["making-of-wrapper"], styles[pageStyling])}>
                            <div className={clsx(styles["making-of-wrapper--info-wrapper"])}>
                                <div className={clsx(styles["making-of-wrapper--info-wrapper--info"])}>
                                    <p><strong>Verhaal</strong></p>
                                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                                </div>
                                <div className={clsx(styles["making-of-wrapper--info-wrapper--info"])}>
                                    <h4>Auteur</h4>
                                    <p>{makingOfData[0]?.fairytaleAuthor}</p>
                                    <p>{makingOfData[0]?.genre}</p>
                                </div>
                                <div className="button-wrapper">
                                    <button
                                        className="button"
                                        onClick={toggleDescriptionState}
                                    >{buttonText}</button>
                                </div>
                            </div>
                            <div className={clsx(styles["making-of-wrapper--spacer"])}></div>
                            <div className={clsx(styles["making-of-wrapper--image-wrapper"])}>
                                <img
                                    className={clsx(styles["making-of-wrapper--image-wrapper--image"])}
                                    src={makingOfData[0]?.imgThumbnail}
                                    alt="making of image"
                                />
                                {makingOfData[0]?.fairytaleLink && (
                                    <a href={makingOfData[0]?.fairytaleLink} target="_blank" className="button">
                                        View website
                                    </a>
                                )}
                            </div>
                        </div>
                    </section>

                    <section className={clsx(styles["extra-info"])}>
                        <h1>Extra informatie</h1>
                        <div className={clsx(styles["extra-info-image-wrapper"])}>
                            {makingOfData[0]?.imgsExtra
                                .slice(0, 3)
                                .map((imageUrl: string, index: number) => (
                                    imageUrl !== '' ? (
                                        <img
                                            key={index}
                                            src={imageUrl}
                                            alt={`extra image ${index + 1}`}
                                        />
                                    ) : (
                                        <p key={index}>Image not found</p>
                                    )
                                ))
                            }
                        </div>
                        <p>{ makingOfData[0]?.imgsInfo }</p>

                    </section>
                </>
            )}
        </div>
    );
};