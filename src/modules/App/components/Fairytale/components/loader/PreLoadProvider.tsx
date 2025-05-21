import { useProgress } from "@react-three/drei";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// Types
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
});

// Custom hook to access the PreloadContext
export const usePreload = () => useContext(PreloadContext);

export const PreloadProvider: React.FC<PreloadProviderProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { progress, loaded, total } = useProgress();
  
  
  useEffect(() => {

    // Check loading stuck
    if (total > 0 && loaded === 0 ) {
      console.warn("Loading appears to be stuck! Check your model paths and asset types.");
    }
    
    // Check close to completion
    if ((progress > 99 || (loaded > 0 && loaded === total)) && total > 0) {
      const timer = setTimeout(() => {
        console.log("All assets loaded successfully!");
        setIsLoaded(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    
  }, [progress, loaded, total]);

  return (
    <PreloadContext.Provider value={{ isLoaded, progress }}>
      {children}
    </PreloadContext.Provider>
  );
};