import { FC } from "react"

//Types
import { FairytaleType } from "../../Types/FairyTaleType"

//Components
import { LargeWidget } from "../LargeWidget/LargeWidget"

export const Trending:FC<FairytaleType[]>= () => {
    return(
        <section className="trending-section">
            <h2>HOT TODAY</h2>
            <div className="trending-widget-wrapper">
                <LargeWidget
                    id={ "1" }
                    title={ "The Little Mermaid" }
                    description={ "A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince's love." }
                    image={ "https://example.com/little-mermaid.jpg" }
                />
            </div>
        </section>
    )
}