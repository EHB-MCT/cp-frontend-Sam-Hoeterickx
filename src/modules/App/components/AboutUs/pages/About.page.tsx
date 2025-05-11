import clsx from "clsx";

//Components
import { Trending } from "~modules/shared/Trending/Trending";

//Hooks
import { useFairyTaleData } from "~modules/shared/const/hooks/getFairyTaleData.hook";

//Css
import styles from "./about.module.scss";


export const About = () =>  {

    document.title = "About us | Er was eens...";

    const { data: fairyTales, isLoading } = useFairyTaleData();


    return(
        <div className="outer-wrapper">
            <div className={clsx(styles["about-wrapper"])} >
                <div className={clsx(styles["about-wrapper--info-wrapper"])}>
                    <h1>EHB STUDENTS</h1>
                    <p>
                        EHB-studenten Front-End Development werken dit semester met React aan een parallax website rond het thema sprookjes.
                        <br />
                        Ze combineren techniek en creativiteit om een interactieve webervaring te creëren met diepte-effecten en animaties.
                        <br />
                        Zo leren ze React-componenten, state management en visuele effecten toepassen om hun sprookjeswereld tot leven te brengen.
                    </p>
                </div>
                <div className={clsx(styles["about-wrapper--images-wrapper"])}>
                    <img src="/about_image_1.jpg" alt="image of ehb students" className={clsx(styles["about-wrapper--images-wrapper--about_image_1"])} />
                    <img src="/about_image_2.jpg" alt="image of ehb students" className={clsx(styles["about-wrapper--images-wrapper--about_image_2"])} />
                    <img src="/about_image_3.jpg" alt="image of ehb students" className={clsx(styles["about-wrapper--images-wrapper--about_image_3"])} />
                    <img src="/about_image_4.jpg" alt="image of ehb students" className={clsx(styles["about-wrapper--images-wrapper--about_image_4"])} />
                    <img src="/about_image_1.jpg" alt="image of ehb students" className={clsx(styles["about-wrapper--images-wrapper--about_image_5"])} />
                    <img src="/about_image_2.jpg" alt="image of ehb students" className={clsx(styles["about-wrapper--images-wrapper--about_image_6"])} />
                    <img src="/about_image_3.jpg" alt="image of ehb students" className={clsx(styles["about-wrapper--images-wrapper--about_image_7"])} />
                    <img src="/about_image_4.jpg" alt="image of ehb students" className={clsx(styles["about-wrapper--images-wrapper--about_image_8"])} />

                </div>
            </div>
            {
                isLoading ? (<p>Loading...</p>) : (<Trending data={fairyTales || []} />)
            }
        </div>
    )
}