fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b9c9011cdfmshac625d6398645b0p1744c8jsn438e7c993db6",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response=>{
    console.log(response);
    let filmsDiv = document.querySelector('.films')
    response.d.forEach(item => {
        filmsDiv.innerHTML+=`
        <div>
             <img src="${item.i.imageUrl}">
        </div>
    `
    });
    
})
.catch(err => {
	console.error(err);
});