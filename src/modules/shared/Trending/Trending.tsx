import { FC } from "react"

//Types
import { FairyTaleType } from "~shared/Services/fairy-tale-data/types/FairyTaleType"

//Components
import { LargeWidget } from "~shared/LargeWidget"

interface TrendingProps {
    data: FairyTaleType[]
}

export const Trending:FC<TrendingProps> = ( data ) => {

    return(
        <section className="trending-section">
            <h2>HOT TODAY</h2>
            <div className="trending-widget-wrapper trending">
                {   data.data
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 2)
                    .map((fairytale) => {
                        return (
                            <LargeWidget
                                key={ fairytale.id }
                                id={ fairytale.id }
                                title={ fairytale.title }
                                theme={ fairytale.genre }
                                student={ fairytale.student }
                                image={ fairytale.images.main_image }
                            />
                        )
                    })}
            </div>
        </section>
    )
}