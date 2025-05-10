export interface FairyTaleType {
    id: string;
    title: string;
    student: string;
    theme: string;
    images: {
        main_image: string;
        thumbnail: string;
        gallery: {
            extra_image_1: string;
            extra_image_2?: string;
            extra_image_3?: string;
        }[];
    };
}