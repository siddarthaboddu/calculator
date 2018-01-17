searchWord = "";

function query() {
    // var searchWord = "x" + document.getElementById("text").value + "x";
    console.log("dasf");
    searchWord = document.getElementById("inputtext").value;
   // searchWord = '1' + searchWord + '2';
    console.log(searchWord);
    if (new String(searchWord).valueOf() == new String("").valueOf()) {
        htmlstring = '<div class=row id="query0" style="color:whitesmoke;text-align:center">search results not found</div>';
        $("#list").append(htmlstring);
    }
    else {
        searchWord = searchWord.replace(/ /gi, "%20");
        console.log(searchWord);
        try {
            nodee = document.getElementById("query0").parentNode;
            for (var i = 0; i < 10; i++) {
                nodee.removeChild(document.getElementById("query" + i));
            }
            console.log('try');
        }
        catch (e) { }

        //$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=" + searchWord, function (data) { console.log(data);});
        $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=" + searchWord, function (data) {
            console.log(data);
            renderOutputHtml(data);

        });
    }

}
function renderOutputHtml(ourdata) {
    var results = ourdata["query"]["search"];
    var htmlstring = "";
    console.log(results);
    if (results.length == 0) {
        htmlstring = '<div class=row id="query0" style="color:whitesmoke;text-align:center">search results not found</div>';
    }
    else
    for (var i = 0; i < results.length; i++) {
        var link = "https://en.wikipedia.org/wiki/" + results[i]["title"].replace(/ /gi, "_");
        htmlstring += '<div class="card"  id="query'+i+'">' + '<a href="'+link+' " ><h3 style="margin-bottom:0px">'+results[i]["title"]+'</h3>' +'<br>'+results[i]["snippet"] + '</a></div>';
        
    }
    $("#list").append(htmlstring);
}

function main() {
  
   //$('#search').click(query());
}
$(document).ready(main);
