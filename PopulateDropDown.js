//select the drop down by ID

const dropdownMenu = d3.select("#selDataset");


d3.json("StarterCode/static/js/data/samples.json").then((data) => {
    console.log(data)

    //Populate names array from samples.json as new values in the drop dwon 
    data.names.map(name=>{
        dropdownMenu.append("option").text(name).property("value");
    });
    //Call functions to draw Bar and bubble chart using first element of drop down value
    drawbar2(data.names[0]);
    drawBubble(data.names[0]);
    populateDemo(data.names[0]);
});

function optionChanged(otuid){
    
    //Call functions to draw Bar and bubble chart using selected drop down value
    drawbar2(otuid);
    drawBubble(otuid);
    populateDemo(otuid);
    
}