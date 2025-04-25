import { LargeWidget } from "../../../../shared/LargeWidget/LargeWidget";

export const AllFairyTales = () => {
    return (
        <div>
            <h1>All Fairy Tales</h1>
            <p>List of all fairy tales will be displayed here.</p>

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
        </div>
    );
}