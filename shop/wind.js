// Kites fly well from 10 to 40 km/h, both ends included.
function goodForKites(kmh) {
  return typeof kmh === 'number' && kmh >= 10 && kmh <= 40;
}

exports.goodForKites = goodForKites;
