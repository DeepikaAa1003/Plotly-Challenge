//Initialize the ID value 
function drawBubble(filter_value){
let SampleSumByFamily = [];

d3.json("data/samples.json").then((data) => {
        const filterList= data.samples.filter(a=> a.id === filter_value); //Filter by selected subject
        filterList[0].sample_values.map((sample_value,index) => {  //Loop through sample values of selected subject
                const taxonomiclist = filterList[0].otu_labels[index];
                const lastIndexValue = taxonomiclist.lastIndexOf(";"); //Get the index number of last occurence of ;
                // if(lastIndexValue === -1){
                //         lastIndexValue = taxonomiclist.length;  // If no semicolon found then family value will be entire string
            
                // }
                let familyValue = taxonomiclist.substring(0, lastIndexValue); //Get the family value from start of the string till last index of ;
                familyValue = familyValue.replace(';', ',');  // replacing semicolon with comma
                
                if(SampleSumByFamily.some(item => item.FamilyName === familyValue)){    //Check if the family value already exists in the final list
                    SampleSumByFamily.map(s=> {
                        if(s.FamilyName === familyValue){
                            s.Sum = s.Sum + sample_value; //If the value exists just update the sum with new sum
                            
                        }
                    });
                }
                else{
                    let tempOTUIDObject = {}; // If the family  doesn't exists create a new object and push to the array
                    tempOTUIDObject["FamilyName"] = familyValue;
                    tempOTUIDObject["Sum"] = sample_value;
                    SampleSumByFamily.push(tempOTUIDObject);
                    
                }

    });
    console.log(SampleSumByFamily);
    
    //set properties of bubble chart

    const size = SampleSumByFamily.map(sample => sample.Sum);
    const desired_maximum_marker_size = 40;
    const trace1 = {
        x: SampleSumByFamily.map(sample => sample.Sum),
        y: SampleSumByFamily.map(sample => sample.FamilyName),
        mode: 'markers',
        marker: {
            size: size,
            sizeref: 2.0 * Math.max(...size) / (desired_maximum_marker_size**2),
            sizemode: 'area'
        }
      };
      
      const bubbledata = [trace1];
      
      const layout = {
        title: 'Count of Bacteria by Family - Selected Subject',
        showlegend: false,
        margin: {
            l: 550,
            r: 25,
            t: 50,
            b: 50
        },
            width: 1200,
            height: 500
      };
      
      Plotly.newPlot('bubble', bubbledata, layout);

});

}
   