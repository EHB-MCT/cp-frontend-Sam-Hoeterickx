import { DATA_MOCK } from "./data";
import { FairytaleType } from "./types/FairyTaleType";

class FairyTaleService {
    getFairyTaleData():Promise<FairytaleType[]>{
        return new Promise<FairytaleType[]>((resolve)=> {
			setTimeout(()=>{
				resolve(DATA_MOCK);
			}, 0);
		});
    }

}

export const fairyTaleService = new FairyTaleService();
