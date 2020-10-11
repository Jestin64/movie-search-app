import React,{useState} from "react"


function SearchMovies(){
    const [query, setQuery] = useState('')
    
    async function movieSearch(e){
        e.preventDefault()
        try{
            const search_title = `https://imdb-api.com/en/API/SearchTitle/k_NUO1m1iy/${query}`
            let res = await fetch(search_title)
            let data = await res.json()
            let search_ids = data.results
            let id_list = search_ids.map(list=>list.id)
            console.log(id_list)
            
        }
        catch(err){
            console.log(err)
        }

    }

    return(
        <div>
            <form className="form" onSubmit={movieSearch}>
                <label className="label" htmlFor="query">Enter Movie</label>
                <input type="text" placeholder="i.e Jurassic Park" 
                name="query" className="input"
                onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="search-button" >search</button>
            </form>

        </div>
    )
}

export default SearchMovies

// wiki = `https://imdb-api.com/en/API/Wikipedia/k_NUO1m1iy/${id}/`