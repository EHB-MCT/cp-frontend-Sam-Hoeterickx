import { FC } from "react"

//Types
import { FairytaleType } from "../../Types/FairyTaleType"

//Components
import { LargeWidget } from "../LargeWidget"

interface TrendingProps {
    data: FairytaleType[]
}

export const Trending:FC<TrendingProps> = ( data ) => {

    return(
        <section className="trending-section">
            <h2>HOT TODAY</h2>
            <div className="trending-widget-wrapper">
                { data.data.map((fairytale) => {
                    return (
                        <LargeWidget
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
    )
}