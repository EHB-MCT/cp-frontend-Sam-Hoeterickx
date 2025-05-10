import { DATA_MOCK } from "./data";
import { FairyTaleType } from "./types/FairyTaleType";

class FairyTaleService {
    getFairyTaleData():Promise<FairyTaleType[]>{
        return new Promise<FairyTaleType[]>((resolve)=> {
			setTimeout(()=>{
				resolve(DATA_MOCK);
			}, 0);
		});
    }

    //CALL deze op een zo hoog mogelijk niveau en dan doorgeven? of kan ik met deze hook het beste het overall gaan callen 
    //maar dan gaat er telkens een loading time zijn wat ook niet optimaal is en wat op het hoogste niveau maar 1 keer voorkomt

}

export const fairyTaleService = new FairyTaleService();
