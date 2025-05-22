import { FC } from "react";

//Components
import { Widget } from "../widget";

//Types
import { FairyTaleType } from "../Services/fairy-tale-data/types/FairyTaleType";

export const StorySection: FC<{ fairyTales: FairyTaleType[] }> = ({ fairyTales }) => {
    return (
        <section className="story-section">
            <h2>Storys</h2>
            <div className="widget-wrapper">
                {fairyTales && fairyTales.length > 0 ? (
                    fairyTales.map((fairytale: FairyTaleType) => (
                        <Widget
                            key={fairytale.id}
                            id={fairytale.id}
                            title={fairytale.fairytale}
                            theme={fairytale.genre}
                            image={fairytale.imgThumbnail}
                            student={fairytale.nameStudent}
                        />
                    ))
                ) : (
                    <p>No fairy tales available.</p> 
                )}
            </div>
        </section>
    )
}