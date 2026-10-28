import { useEffect, useState } from "react";

const photos_API = "https://picsum.photos/v2/list?limit=30" ;
function useFetchPhotos(){
    const [photos,setPhotos] = useState([]);
    const [loading,setLoading] =useState(true);
    const [error, setError]  = useState("");

    useEffect(

        () => {
            const fetchPhotos = async()=>{
                try {
                    setLoading(true);
                    setError("");
                    const response = await fetch(photos_API) ;
                    if(!response.ok){
                        throw new Error("failes to load");

                    }
                    const data = await response.json();
                    setPhotos(data);

                }catch(err){
                    setError(err.message || "Something went wrong while fetching photos. ");
                }finally{
                    setLoading(false);
                }
            };

             fetchPhotos();
        },[]);

return {
    photos,
    loading,
    error,
};
    
}
export default useFetchPhotos ;