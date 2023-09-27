import { useActiveSectionContext } from "@/context/active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { sectionName } from "@/lib/types"



export function useSectionInView(sectionName: sectionName, threshold = 0.75) {

    const { ref, inView } = useInView({
      threshold,
    });
    
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  
    useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
      }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  
    return {
      ref,
    };
  }