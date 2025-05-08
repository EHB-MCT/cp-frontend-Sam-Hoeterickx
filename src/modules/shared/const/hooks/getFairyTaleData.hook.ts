import { useQuery } from "@tanstack/react-query"
import { SHARED_QUERY_KEYS } from "./query-keys.const"
import { fairyTaleService } from "~shared/Services/fairy-tale-data"

export const useFairyTaleData = () => {

    return useQuery({
        queryKey: SHARED_QUERY_KEYS.fairytale,
        queryFn: fairyTaleService.getFairyTaleData,
    })
}