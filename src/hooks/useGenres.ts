import genres from "./genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
 
const useGengres = () => ({data: genres, isLoading: false, error: null});


export default useGengres;
    
