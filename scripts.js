var baconMaster = (function () {
    var baconPhrases = [];
    return {
      loadPhrases: function (cbFunction) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "object.json");
        xhr.addEventListener("load", function(){
          baconPhrases = JSON.parse(xhr.responseText)
          cbFunction(baconPhrases)
        })
        xhr.send();
      }

    }
 }())

function showPhrases (phraseBacon) { //console.log(phraseBacon)

  var list = document.querySelector(".dump")
  var output = "";
  for (var i = 0; i < phraseBacon.length; i++) {
    var currentBacon = phraseBacon[i];//console.log(currentBacon.thing)
    list.innerHTML += `<li>${currentBacon.thing}</li>`
  }
}

baconMaster.loadPhrases(showPhrases);
