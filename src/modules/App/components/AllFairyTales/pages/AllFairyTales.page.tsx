//Components
import { Trending } from "~shared/Trending/Trending";
import { Widget } from "~shared/widget";
import { FC } from "react";

//Hooks
import { useFairyTaleData } from '~shared/const/hooks/getFairyTaleData.hook'

//Types

export const AllFairyTales: FC = () => {
    document.title = "Explore | Er was eens...";

    const {data: fairyTales, isLoading} = useFairyTaleData();

    return (
        <div className="outer-wrapper">
            {isLoading ? (
                <p>Loading...</p> // Show a loading message while data is being fetched
            ) : (
                <>
                    <Trending data={fairyTales || []} />

                    <section className="story-section">
                        <h2>Storys</h2>
                        <div className="widget-wrapper">
                            {fairyTales && fairyTales.length > 0 ? (
                                fairyTales.map((fairytale) => (
                                    <Widget
                                        key={fairytale.id}
                                        id={fairytale.id}
                                        title={fairytale.title}
                                        theme={fairytale.genre}
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
};