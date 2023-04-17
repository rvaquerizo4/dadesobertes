var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([2.17694, 41.3825]), // Barcelona
      zoom: 12
    })
  });

  
// api url
const api_url = "https://dades.eicub.net/api/1/cinemes-inventari";
    

async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

getapi(api_url);

  


