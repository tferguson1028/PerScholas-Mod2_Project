const baseUrl = "https://image-charts.com/chart.js/2.8.0?c=";
async function generateGraph(dataPointsArr)
{
  let graphData = {
    "type": "line",
    "data": {
      "labels": [],
      "datasets": [
        {
          "label": "Dataset 1",
          "backgroundColor": "#4EC5F155",
          "borderColor": "#4EC5F1",
          "borderWidth": 1,
          "data": []
        }
      ]
    },
    "options": {
      "responsive": true,
      "legend": false
    } 
  };

  for(let dataPointPair of dataPointsArr)
  {
    graphData.data.datasets.data.push(dataPointPair.point);
    graphData.data.labels.push(dataPointPair.label);
  }
  return baseUrl + JSON.stringify(graphData);
}

module.exports = { generateGraph };
