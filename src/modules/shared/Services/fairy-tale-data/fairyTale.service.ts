import { FairyTaleType } from "./types/FairyTaleType";

const URL = 'https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json'

class FairyTaleService {
    async getFairyTaleData(): Promise<FairyTaleType[]>{
            const response = await fetch(URL)
            
            if(!response.ok){
                throw new Error('Failed to fetch Fairytale data');
            }

            const DATA: FairyTaleType[] = await response.json();
        return DATA;
    }
    //CALL deze op een zo hoog mogelijk niveau en dan doorgeven? of kan ik met deze hook het beste het overall gaan callen 
    //maar dan gaat er telkens een loading time zijn wat ook niet optimaal is en wat op het hoogste niveau maar 1 keer voorkomt
}

export const fairyTaleService = new FairyTaleService();
