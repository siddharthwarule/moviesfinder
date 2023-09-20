

const btn = document.getElementById("search");

const input= document.getElementById("inputSearch");


  function run(input){
	// console.log(input.value);

	const iValue = input;
	
 url = `https://movie-database-alternative.p.rapidapi.com/?s=${iValue}&r=json&page=1`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79008bcb2fmshe9ba33b441db7f0p164ebdjsn4cd5f24341c8',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};
	const response =  fetch(url, options).then(resp => resp.json()).then(resp => {
		
		// console.log(resp.Search);

		var movies = resp.Search;

		console.log(movies);

		
var containerDiv = document.createElement("div");

for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];

    var movieDiv = document.createElement("div");
	movieDiv.classList.add("col-md-3" ,"mb-3"); // Use Bootstrap grid system to divide into 4 columns
    movieDiv.innerHTML = `
	<div class = "mx-auto p-2"  style="width: 300px;>
	<div class="card ms-1 ">
	<img src="${movie.Poster}" class="card-img-top" alt="${movie.Title} Poster">
	<div class="card-body">
		<h5 class="card-title">${movie.Title}</h5>
		<p class="card-text">Year: ${movie.Year}</p>
	</div>
</div>
</div>
`

    containerDiv.appendChild(movieDiv);
}
containerDiv.classList.add("inner" ,"inner1");

document.body.appendChild(containerDiv);


	});
// })	
}

run("Avengers");

btn.addEventListener("click",(e)=>{

const iValue = input.value;

run(iValue);


})