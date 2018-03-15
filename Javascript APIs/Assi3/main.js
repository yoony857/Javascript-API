$(document).ready(function() {

$('button').click(function() {
    console.log('getting type of ' + this.id);
      var typeURL = "https://pokeapi.co/api/v2/type/" + this.id;
      console.log(typeURL);

      $.ajax({
      url: typeURL,
      dataType: "json",
      method: "GET",
      success: function(data) {
        console.log(data.names);
        for (let i=0;i<data.names.length;i++) {
          console.log(data.names[i]);
        }
      }  
      
    }); 
});


  $("form").on("submit", function(e) {
    e.preventDefault();

    function createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        xhr = null;
      }
      return xhr;
    }
//     // var basesURL = "https://pokemon.gameinfo.io/";
//     // $("#ajaxButton").click(function() {
//     //   Normal = getRandom();
//     //   console.log("Random Pokemon is: ");
//     //   console.log(basesURL)
//     // }

    


    function makeCorsRequest() {

      var url =
        "http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html";
      var xhr = createCORSRequest("GET", url);
      if (!xhr) {
        alert("CORS not supported");
        return;
      }

      xhr.onload = function() {
        var text = xhr.responseText;
        var title = getTitle(text);
        alert("Response from CORS request to " + url + ": " + title);
      };
      xhr.onerror = function() {
        alert("Woops, there was an error making the request.");
      };
      xhr.send();
    }

   

    var userInput = $("#search").val();
    var url = "https://pokeapi.co/api/v2/pokemon/" + userInput;
    console.log(url);
    $.ajax({
      url: url,
      dataType: "json",
      method: "GET",
      success: function(data) {
        var name = data.forms[0].name,
          pokeImgFront = data.sprites.front_default,
          speed = data.stats[0].base_stat,
          spDef = data.stats[1].base_stat,
          spAtk = data.stats[2].base_stat,
          def = data.stats[3].base_stat,
          atk = data.stats[4].base_stat,
          hp = data.stats[5].base_stat,
          id = "#" + data.id,
          types = [];
        for (var i = 0; i < data.types.length; i++) {
          var type = data.types[i].type.name;
          types.push(type);
        }

        $(".name").html(name);
        $(".idNum").html(id);
        $("#pokeImage").attr("src", pokeImgFront);
        $(".hp").html(hp);
        $(".attack").html(atk);
        $(".defense").html(def);
        $(".special-attack").html(spAtk);
        $(".special-defense").html(spDef);
        $(".speed").html(speed);
        // pokemonType(types);
      } 
    }); 
  }); 
});


