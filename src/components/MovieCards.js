import React from "react"


export default function MovieCards(props){
    const m_id = props.movie.id
    const id_url = `https://imdb-api.com/en/API/Title/k_12345678/${m_id}/Posters,Ratings,Wikipedia`
    
    try{
        let res = async () => {await fetch(id_url)}
        let data = async () => {await res.json()}
        console.log(data)
    }
    catch(err){console.log(err)}
 

    return(
        <> 
            <div className="card--image">
                <img src={props.movie.Poster} alt={props.movie.title}/>
                <p> {props.movie.Wikipedia} </p>

            </div>
        </>
    )
}

//placeholder for variables
// description: "(1962)"
// id: "tt0056058"
// image: "https://imdb-api.com/images/original/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_Ratio0.7273_AL_.jpg"
// resultType: "Title"
// title: "Harakiri"
