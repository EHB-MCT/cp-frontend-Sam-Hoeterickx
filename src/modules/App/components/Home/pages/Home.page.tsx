import { FC } from "react";

//Components
import { StorySection } from "~modules/shared/StorySection";
import { Trending } from "~shared/Trending/Trending";

//Hooks
import { useFairyTaleData } from '~shared/const/hooks/getFairyTaleData.hook'

export const Home: FC = () => {
    document.title = "Explore | Er was eens...";
    document.body.classList.add('main');

    const {data: fairyTales, isLoading} = useFairyTaleData();

    return (
        <div className="outer-wrapper">
            {isLoading ? (
                <p>Loading...</p> 
            ) : (
                <>
                    <Trending data={fairyTales || []} />

                    <StorySection
                        fairyTales={ fairyTales || [] }
                    />
                </>
            )}
        </div>
    );
};