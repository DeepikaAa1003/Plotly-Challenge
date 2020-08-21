
function drawbar2(filter_value){
      d3.json("data/samples.json").then((data) => {
          const filterList= data.samples.filter(a=> a.id === filter_value);  //grab samples of selected OTU ID from dropdown 
          //console.log(filterList[0]);
          const x_axis = filterList[0].sample_values.map(item=>item).slice(0,10).reverse(); //get top 10 sample values
          console.log(x_axis);
          const y_axis = filterList[0].otu_labels.map((item,index) => {
                          let taxonomiclist = item.split(";");  //Convert otu labels into an array  by splitting at ;
                          let genusValue = taxonomiclist[taxonomiclist.length -1]; //extract last element of array as genus value 
                          let tempString = filterList[0].otu_ids[index];  // Extract corresponding OTU ID value
                          let finalString = `${tempString} : ${genusValue}`;  //Create string label to show on Y axis
                          return finalString;
                              }).slice(0,10).reverse();  //  Extract top 10
          console.log(y_axis);
          const nameList = filterList[0].otu_labels.map(item => item).slice(0,10).reverse();   //Create an array for hover text
          console.log(nameList);
          const trace1 = {
              x: x_axis,
              y: y_axis,
              text: nameList,
              type: "bar",
              orientation: "h"
            };
          const chartData = [trace1];

        // Apply the group bar mode to the layout
        const layout = {
          title: "Top 10 Bacteria - Selected Subject",
          margin: {
            l: 150,
            r: 0,
            t: 50,
            b: 50
          },
          width: 500,
          height: 500

        };

        // Render the plot to the div tag with id "bar2"
        Plotly.newPlot("bar2", chartData, layout);

      });
}