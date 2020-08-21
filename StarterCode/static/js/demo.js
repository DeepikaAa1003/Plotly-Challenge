
//populate demographic value of selected subject from the drop down 

function populateDemo(filter_value){
        d3.json("data/samples.json").then((data) => {
            const demoList = data.metadata.filter(a=> a.id === parseInt(filter_value)); // Extract metadata of the selected subject
            const tempArray = Object.entries(demoList[0]).map(([key, value]) => `${key.toUpperCase()} : ${value}`);  // convert them into uppercase 
            console.log(tempArray);
            let panel_body = d3.select("#sample-metadata"); //Select the panel element to display the demographic metadata
            panel_body.html(tempArray.join('<br/>'));
            
        });
}
