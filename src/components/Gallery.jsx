import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import useFetchPhotos from "../hooks/useFetchPhotos";
import favouriteReducer from "../reducers/favouritesReducer";
import SearchBar from "./SearchBar";
import PhotoCard from "./PhotoCard";
import LoadingSpinner from "./LoadingSpinner";


const storage_key = "celebrare-favourite-photos";


function Gallery(){

const {photos,loading, error} = useFetchPhotos();

const [searchTerm , setSearchTerm] = useState("") ;

const [favourites, dispatch] = useReducer(
    favouriteReducer,
    [],
    ()=> {
        try {
            const savedfavourites =localStorage.getItem(storage_key);

            return savedfavourites ? JSON.parse(savedfavourites):[];
        }catch{
            return[];
        }
    }
);

useEffect(()=>{
    localStorage.setItem(storage_key, JSON.stringify(favourites));
},[favourites])

const handleSearch =useCallback((event)=>{
    setSearchTerm(event.target.value);
},[]);

const filteredPhotos = useMemo(()=>{
    const searchValue =searchTerm.trim().toLowerCase();

    if(!searchValue){
        return photos ;
    }
    return photos.filter((photo)=>photo.author.toLowerCase().includes(searchValue));
},[photos,searchTerm]);


const handleToggleFavourite = useCallback((photoId) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: photoId,
    });
  }, []);

 if (loading) {
    return <LoadingSpinner />;
  }


  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
        <h2 className="text-lg font-semibold text-red-800">
          Unable to load photos
        </h2>

        <p className="mt-2 text-sm text-red-600">{error}</p>
      </div>
    );
  }
return (

<section>
    <SearchBar value={searchTerm} onChange={handleSearch}/>

     <div className="mb-6 m-2 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing {filteredPhotos.length}{" "}
          {filteredPhotos.length === 1 ? "photo" : "photos"}
        </p>

        <p className="text-sm font-medium text-slate-600">
          {favourites.length}{" "}
          {favourites.length === 1 ? "favourite" : "favourites"}
        </p>
      </div>

        {filteredPhotos.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <p className="text-slate-500">
            No photos found for "{searchTerm}".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 m-2">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Gallery;


