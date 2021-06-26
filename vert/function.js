var canvasDiv = document.getElementById('container');
var options = {
  particleColor: '#fff',
  //background: 'nord.png',
  interactive: true,
  speed: 'high',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);