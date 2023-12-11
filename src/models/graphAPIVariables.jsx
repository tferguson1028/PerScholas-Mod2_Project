const baseUrl = "image-charts.com/chart.js/2.8.0?bkg=white&c=";
function generateGraphURL(dataPointsArr)
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
          "borderWidth": 3,
          "pointRadius": 0,
          "lineTension": 0.6,
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
    graphData.data.datasets[0].data.push(dataPointPair.point);
    graphData.data.labels.push(dataPointPair.label);
  }
  
  // https://stackoverflow.com/questions/6807180/how-to-escape-a-json-string-to-have-it-in-a-url
  let retURL = baseUrl+encodeURIComponent((JSON.stringify(graphData)));
  console.log(retURL);
  return String(retURL);
}

module.exports = { generateGraph: generateGraphURL };
