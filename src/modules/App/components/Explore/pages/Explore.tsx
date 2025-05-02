import { FC } from "react";

//Components
import { Widget } from "../../../../shared/widget";

//Hooke 
import { useFairyTaleData } from "../../../../shared/const/hooks/getFairyTaleData.hook";

export const Explore: FC = () => {
    document.title = "Explore | Er was eens...";

    const {data: fairyTales, isLoading} = useFairyTaleData();

    return (
        <div className="outer-wrapper">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>

                    <section className="story-section">
                        <h2>Storys</h2>
                        <div className="widget-wrapper">e
                            {fairyTales && fairyTales.length > 0 ? (
                                fairyTales.map((fairytale) => (
                                    <Widget
                                        key={fairytale.id}
                                        id={fairytale.id}
                                        title={fairytale.title}
                                        theme={fairytale.theme}
                                        image={fairytale.images.main_image}
                                        student={fairytale.student}
                                    />
                                ))
                            ) : (
                                <p>No fairy tales available.</p> // Handle empty data gracefully
                            )}
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}