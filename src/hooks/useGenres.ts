import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}
 
const useGengres = () => useData<Genre>('/genres');


export default useGengres;
    
