// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13);

// Añadir capa de OpenStreetMap
var baseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Añadir un marcador en Aguascalientes capital
var marker = L.marker([21.88234, -102.28259]).addTo(map);
// Añadir un pop-up al marcador
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Marcador en la Plaza de la Patria
var plazaPatria = L.marker([21.88187, -102.29495]).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

// Marcador en el Museo Nacional de la Muerte
var museoMuerte = L.marker([21.88417, -102.28878]).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");


// Marcador en el Parque Tres Centurias
var tresCenturias = L.marker([21.88676, -102.29332]).addTo(map);
tresCenturias.bindPopup("<b>Parque Tres Centurias</b><br>Un espacio histórico y cultural.");

// Marcador en el Jardín de San Marcos
var jardinSanMarcos = L.marker([21.87981, -102.29856]).addTo(map);
jardinSanMarcos.bindPopup("<b>Jardín de San Marcos</b><br>Uno de los parques más representativos de Aguascalientes.");

// Marcador en el Museo Descubre
var museoDescubre = L.marker([21.92643, -102.29545]).addTo(map);
museoDescubre.bindPopup("<b>Museo Descubre</b><br>Un museo de ciencia y tecnología.");

// Marcador en el Parque Héroes Mexicanos
var heroesMexicanos = L.marker([21.89301, -102.27655]).addTo(map);
heroesMexicanos.bindPopup("<b>Parque Héroes Mexicanos</b><br>Un lugar popular para la recreación familiar.");

// Marcador en la Plaza de Toros Monumental de Aguascalientes
var plazaToros = L.marker([21.87659, -102.28435]).addTo(map);
plazaToros.bindPopup("<b>Plaza de Toros Monumental</b><br>Famosa plaza de toros de Aguascalientes.");



// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
  color: 'green',
  fillColor: '#0f3',
  fillOpacity: 0.5,
  radius: 300
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

// Dibujar un polígono para el Centro Histórico
var centroHistorico = L.polygon([
  [21.8821, -102.2935],
  [21.8829, -102.2865],
  [21.8797, -102.2860],
  [21.8792, -102.2920]
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

// Capas base y superpuestas
var baseMaps = {
  "Mapa base": baseMap
};

var overlayMaps = {
  "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
  "Feria de San Marcos": feriaSanMarcos,
  "Centro Histórico": centroHistorico
};

// Añadir control de capas al mapa
L.control.layers(baseMaps, overlayMaps).addTo(map);

// Añadir un marcador en Aguascalientes capital
var marker = L.marker([21.88234, -102.28259]).addTo(map);
// Añadir un pop-up al marcador
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Marcador en la Plaza de la Patria
var plazaPatria = L.marker([21.88187, -102.29495]).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");
// Marcador en el Museo Nacional de la Muerte
var museoMuerte = L.marker([21.88417, -102.28878]).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
  color: 'green',
  fillColor: '#0f3',
  fillOpacity: 0.5,
  radius: 300
 }).addTo(map);
 feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");
 
 
 
 var centroHistorico = L.polygon([
  [21.8821, -102.2935],
  [21.8829, -102.2865],
  [21.8797, -102.2860],
  [21.8792, -102.2920]
 ]).addTo(map);
 centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");
 
 var baseMaps = {
  "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
 };
 var overlayMaps = {
  "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
  "Feria de San Marcos": feriaSanMarcos,
  "Centro Histórico": centroHistorico
 };
 L.control.layers(baseMaps, overlayMaps).addTo(map);


 // Parque Rodolfo Landeros
var rodolfoLanderos = L.marker([21.88788, -102.28367], {icon: parqueIcon}).addTo(map);
rodolfoLanderos.bindPopup("<b>Parque Rodolfo Landeros</b><br>Un parque popular para la recreación.");

// Museo Aguascalientes
var museoAguascalientes = L.marker([21.88218, -102.29141], {icon: museoIcon}).addTo(map);
museoAguascalientes.bindPopup("<b>Museo Aguascalientes</b><br>Un museo de arte y cultura.");

// Teatro Aguascalientes
var teatroAguascalientes = L.marker([21.86974, -102.29689], {icon: teatroIcon}).addTo(map);
teatroAguascalientes.bindPopup("<b>Teatro Aguascalientes</b><br>El teatro más importante de la ciudad.");

// Catedral Basílica de Nuestra Señora de la Asunción
var catedralAguascalientes = L.marker([21.88369, -102.29146], {icon: catedralIcon}).addTo(map);
catedralAguascalientes.bindPopup("<b>Catedral Basílica de Nuestra Señora de la Asunción</b><br>La catedral principal de Aguascalientes.");

// Plaza Patria
var plazaPatria = L.marker([21.88234, -102.29495], {icon: plazaIcon}).addTo(map);
plazaPatria.bindPopup("<b>Plaza Patria</b><br>La plaza principal de Aguascalientes.");



 // Usar URL de icono de un servicio en línea para parques
var parqueIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/609/609803.png',  // URL del ícono
  iconSize: [38, 45],
  iconAnchor: [22, 44],
  popupAnchor: [-3, -40]
});

// Crear un ícono personalizado para museos desde un URL
var museoIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2933/2933188.png',
  iconSize: [38, 45],
  iconAnchor: [22, 44],
  popupAnchor: [-3, -40]
});

// Añadir el marcador con ícono de parque
var tresCenturias = L.marker([21.88676, -102.29332], {icon: parqueIcon}).addTo(map);
tresCenturias.bindPopup("<b>Parque Tres Centurias</b><br>Un espacio histórico y cultural.");

// Añadir el marcador con ícono de museo
var museoDescubre = L.marker([21.92643, -102.29545], {icon: museoIcon}).addTo(map);
museoDescubre.bindPopup("<b>Museo Descubre</b><br>Un museo de ciencia y tecnología.");

 
// Ícono para parques
var parqueIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/609/609803.png', // Icono de parque
    iconSize: [38, 45],
    iconAnchor: [22, 44],
    popupAnchor: [-3, -40]
});

// Ícono para museos
var museoIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2933/2933188.png', // Icono de museo
    iconSize: [38, 45],
    iconAnchor: [22, 44],
    popupAnchor: [-3, -40]
});

// Ícono para teatros
var teatroIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2965/2965370.png', // Icono de teatro
    iconSize: [38, 45],
    iconAnchor: [22, 44],
    popupAnchor: [-3, -40]
});

// Ícono para iglesias o catedrales
var catedralIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2713/2713487.png', // Icono de catedral
    iconSize: [38, 45],
    iconAnchor: [22, 44],
    popupAnchor: [-3, -40]
});

// Ícono para plazas
var plazaIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149060.png', // Icono de plaza
    iconSize: [38, 45],
    iconAnchor: [22, 44],
    popupAnchor: [-3, -40]
});

// Crear una nueva capa para los lugares turísticos
var lugaresTuristicos = L.layerGroup([rodolfoLanderos, museoAguascalientes, teatroAguascalientes, catedralAguascalientes, plazaPatria]);

// Actualizar overlayMaps para incluir los nuevos lugares
var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico,
    "Parques y Museos": parquesYMuseos,
    "Lugares Turísticos": lugaresTuristicos
};

// Añadir control de capas
L.control.layers(baseMaps, overlayMaps).addTo(map);
