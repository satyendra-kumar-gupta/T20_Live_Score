const API_KEY="cqmV1XhmnYVYEAjNg4ZLQH1Mxvl1";

//get all matches [upcoming matches]

export const getMatches=()=>{
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return  fetch(url)
    .then((response)=>response.json())
    .catch((error) => console.log("ERROR :", error));
};

//load match deatls
export const getMatcheDetails=(id)=>{
    const url=`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
    .then(response=>response.json())
    .catch((error)=>console.log("Error", error))
}