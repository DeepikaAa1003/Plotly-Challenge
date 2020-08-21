# Plot.ly Assignment - Belly Button Biodiversity

In this assignment, an interactive dashboard is built to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly

1. Used the D3 library to read in `samples.json`.

2. Considering a specific individual/person (test subject ID 940) 

2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs (microbial species) found in the test subject 940.

* Used `sample_values` as the values for the bar chart.

* Used `<otu_id>: <genus>` as the labels for the bar chart. The otu_labels are taxonomies that follow the taxonomic rank - `Kingdom (or Domain in the case of Archaea); Phylum; Subphylum; Order; Family; Genus`  

* Used `otu_labels` as the hovertext for the chart.


2. Created another horizontal bar chart to display the top 10 OTUs (microbial species) found in all individuals. 

* Calculated sum of the sample_values across all individuals by OTU ID.

* Used `(aggregated) sample_values` as the values for the bar chart.

* Used `<otu_id>: <genus>` as the labels for the bar chart. The otu_labels are taxonomies that follow the taxonomic rank - `Kingdom (or Domain in the case of Archaea); Phylum; Subphylum; Order; Family; Genus`  

* Used `otu_labels` as the hovertext for the chart.


3. Created a bubble chart that displays the count of microbes by family for the test subject 940.

* Note that `family` here is the family of the microbe and can be found by extracting the `Kingdom (or Domain in the case of Archaea); Phylum; Subphylum; Order; Family` portion of the `otu_label` and leaving out the `Genus`. 
For eg. the label of the OTU ID 1 is `Archaea;Euryarchaeota;Halobacteria;Halobacteriales;Halobacteriaceae;Halococcus`. Its `family` will be `Archaea;Euryarchaeota;Halobacteria;Halobacteriales;Halobacteriaceae`

* Calculated sum of the sample_values across the selected individual by `family`.

* Used `family` for the y values.

* Used `(aggregated) sample_values` for the x values.

* Used `(aggregated) sample_values` for the marker size (area).

* Used `family` for the text values.

4. Displayed the sample metadata, i.e., an individual's demographic information.

5. Displayed each key-value pair from the metadata JSON object somewhere on the page.

6. The bar chart and bubble chart updates specific to the test subject every time a new test subject is selected using the dropdown provided.

