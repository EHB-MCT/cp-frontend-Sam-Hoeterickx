import { useProgress } from "@react-three/drei";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";


//Types
interface PreloadContextType {
    isLoaded: boolean;
    progress: number;
}

interface PreloadProviderProps {
    children: ReactNode;
}

// Create a context for the preload state with default values
const PreloadContext = createContext<PreloadContextType>({
    isLoaded: false,
    progress: 0
})

// Custom hook to access the PreloadContext
export const usePreload = () => useContext(PreloadContext);

export const PreloadProvider: FC<PreloadProviderProps> = ({ children }) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const { progress, loaded, total } = useProgress();

    useEffect(() => {
        if(loaded === total && total > 0){
            const timer = setTimeout(() => {
                setIsLoaded(true);
            }, 1000);

            return () => clearTimeout((timer))
        }
    }, [loaded, total]);

    return (
        //Context wrapper for components so they use the same value / data
        <PreloadContext.Provider value={{ isLoaded, progress }} >
            { children }
        </PreloadContext.Provider>
    )

}