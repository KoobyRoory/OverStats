function callOverfastAPI(player) {
  // Call the Overfast API for stats
  var player = "KoobyRoory-1778"
  var response=UrlFetchApp.fetch("https://overfast-api.tekrop.fr/players/" + player + "/stats/summary");

  //parse the JSON reply
  var json= response.getContentText();
  var data = JSON.parse(json);

  let text = "";
for (const i in data) {
  text += i + ", ";
 
}
   Logger.log(text);
  
}

/*function displayPlayerData() {
  //pick up the search term from the Google Sheet

  var player = "KoobyRoory-1778"

  var stats = callOverfastAPI(player);

  var general = stats["general"];

  var output= []

  
/*general.forEach(function(elem,i){
   console.log(i);
  output.push([elem["winrate"],elem["games_played"],elem["kda"]])
  sheet.setRowHeight(i+15,65);
 });

}*/

/*function onOpen(){
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Overfast API Menu')
    .addItem('Display owstats','callOverfast')
    .addToUi();

}*/

