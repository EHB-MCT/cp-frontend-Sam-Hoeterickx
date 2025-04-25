export interface FairytaleType {
    id: string;
    title: string;
    description: string;
    images:{
        main_image: string;
        thumbnail: string;
        gallery: string[];
    }
}