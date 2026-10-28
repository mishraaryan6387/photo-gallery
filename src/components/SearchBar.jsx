function Searchbar({value, onChange}){
    return (

        <div>
        <label htmlFor="photo-search"
        className="mb-2 block text-sm font-medium text-slate-700 m-2">
            search by another 
        </label>
        
        <input 
        id= "photosearch" 
        type="text" 
        value={value}
        onChange={onChange} 
        placeholder="Search photo authors"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 m-2
text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus-slate-200"/>     
        </div>
    );
}
export default Searchbar ;