const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`

export default function getNews() {
    return fetch(`${url}`).then((response) => response.json().catch((err) => {console.log(err)}))
}
