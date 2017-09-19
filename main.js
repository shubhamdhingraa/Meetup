$(document).ready(function()
{

$("#searchForm").on("submit",function(e){

let x=$("#searchText").val();
console.log(x);

eventFinder(x);
searchForm.reset();
  e.preventDefault();
});


})

function eventFinder(x)
{
var query=x;
$("#division1").html("");
axios.get("https://api.meetup.com/2/events?key=1d69584647f4873716a2212781e563d&group_urlname="+x+"&sign=true")


.then(function(response)
{

console.log(response);
var results=response.data.results;
if(results.length!=0){

var latitude=results[0].group.group_lat;
var longitude=results[0].group.group_lon;


var output=`
<h4>${results[0].name}</h3>
<h5>${results[0].description}</h3>
<h5>Organised by : ${results[0].group.name}</h3>
<h5>Category : ${results[0].group.who}</h3>
<div class="row">
<div class="col s8">
<h5><a href="${results[0].event_url}" target="_blank">Meetup Url</a></h4>
</div>
</div>
`;


$('#division1').html(output);
}


else {
  {
    var output=`<h4>No Upcoming Meetups for ${query}`;
    $('#division1').html(output);
  }
}

})


.catch(function(err){

console.log(err);




});



}
