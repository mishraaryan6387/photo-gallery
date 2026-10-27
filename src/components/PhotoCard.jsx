function PhotoCard({photo,isFavourite, onToggleFavourite}){
return (
    <article className="overflow-hidden rounded-2xl border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

        <div className="flex items-center justify-between gap-4 p-4">
        <p
          className="min-w-0 truncate text-sm font-medium text-slate-800"
          title={photo.author}
        >
          {photo.author}
        </p>

        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? `Remove ${photo.author} from favourites`
              : `Add ${photo.author} to favourites`
          }
          aria-pressed={isFavourite}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
            isFavourite
              ? "border-red-200 bg-red-50 text-red-500"
              : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-red-500"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFavourite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
            />
          </svg>
        </button>
      </div>

      </article>
    );


}

export default PhotoCard ;