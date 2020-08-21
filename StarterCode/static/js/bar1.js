//Create array of objects
//Each object will be of format {"OtuID" : 1795, "OtuLabel" : "Staphylococcus", "Sum" : 18084}

let SampleSumByOtuID = [];


d3.json("../../data/samples.json").then((data) => {
    data.samples.map(sample => {
        //looping through samples array
        sample.otu_ids.map((otu,index)=>{
                        //Retrieve OTU ID values one by one for each sample

                        if(SampleSumByOtuID.some(item => item.OtuID === otu)){    //Check if the OTU ID value already exists in the final list
                            SampleSumByOtuID.map(s=> {
                                if(s.OtuID === otu){
                                    s.Sum = s.Sum + sample.sample_values[index]  //If the value exists just update the sum with new sum
                                    
                                }
                            });
                        }
                        else{
                            let tempOTUIDObject = {}; // If the OTU ID doesn't exists create a new object and push to the array
                            tempOTUIDObject["OtuID"] = otu;
                            let taxonomiclist = sample.otu_labels[index].split(";"); // Grab the genus value
                            let genusValue = taxonomiclist[taxonomiclist.length -1];
                            tempOTUIDObject["OtuLabel"] = genusValue
                            tempOTUIDObject["Sum"] = sample.sample_values[index];
                            tempOTUIDObject["TaxonomyName"] = sample.otu_labels[index];
                            SampleSumByOtuID.push(tempOTUIDObject);
                            
                        }
        })
    });
    const finalSampleSumByOtuID  = SampleSumByOtuID.sort((a,b) => b.Sum - a.Sum).slice(0,10).reverse(); //sorting , getting top 10 values and then reversing the data
    console.log(finalSampleSumByOtuID);
    // Create a trace
    const trace1 = {
            x: finalSampleSumByOtuID.map(sample => sample.Sum),
            y: finalSampleSumByOtuID.map(sample =>`${sample.OtuID} : ${sample.OtuLabel}`),
            text: finalSampleSumByOtuID.map(sample => sample.TaxonomyName),
            type: "bar",
            orientation: "h"
          };
    
    const chartData = [trace1];

    // Apply the group bar mode to the layout
    const layout = {
    title: "Top 10 Bacteria - All Subjects",
    margin: {
        l: 150,
        r: 0,
        t: 50,
        b: 50
    },
        width: 500,
        height: 500

    };

    // Render the plot to the div tag with id "bar1"
    Plotly.newPlot("bar1", chartData, layout);
  
});