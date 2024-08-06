
const baseUrl = "https://soccer-news-player-profiles-api.p.rapidapi.com/players/";
window.addEventListener("load", function() {
    var url = `${baseUrl}random`; 
    fetchData(url);
});

function IdSelect(){
    try{ 
        const id = parseInt(document.getElementById("id").value);
        var url = `${baseUrl}${id}`;
        fetchData(url);
    } catch (error){ 
        console.log(error);
    }
}

async function fetchData(url) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd671b3ac6cmsh6b6350640968841p11a1eejsn3fc6ea309438',
            'x-rapidapi-host': 'soccer-news-player-profiles-api.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        displayData(result)

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayData(data){
    //longer on purpose, just for better readability and understanding
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const club = document.getElementById("club");
    const nation = document.getElementById("nation");

    name.innerHTML = `Name: ${data.playerName}`;
    age.innerHTML = `Age: ${data.playerAge}`;
    club.innerHTML = `Club: ${data.playerClub}`;
    nation.innerHTML = `National Team: ${data.playerNationalTeam}`;
}
