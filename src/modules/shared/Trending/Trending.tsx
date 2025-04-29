import { FC } from "react"

//Types
import { FairytaleType } from "../Services/fairy-tale-data/types/FairyTaleType"

//Components
import { LargeWidget } from "../LargeWidget"

interface TrendingProps {
    data: FairytaleType[]
}

export const Trending:FC<TrendingProps> = ( data ) => {

    return(
        <section className="trending-section">
            <h2>HOT TODAY</h2>
            <div className="trending-widget-wrapper trending">
                { data.data.slice(0, 2).map((fairytale) => {
                    return (
                        <LargeWidget
                            key={ fairytale.id }
                            id={ fairytale.id }
                            title={ fairytale.title }
                            theme={ fairytale.theme }
                            student={ fairytale.student }
                            image={ fairytale.images.main_image }
                        />
                    )
                })}
            </div>
        </section>
    )
}