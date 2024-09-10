import Currency from './3-currency';
import Pricing from './4-pricing';
import Building from './5-building'
import SkyHighBuilding from './6-sky_high';

const dollar = new Currency('$', 'Dollar');
console.log(dollar.displayFullCurrency());

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p);
console.log(p.displayFullPrice());
console.log(Pricing.convertPrice(100, 0.23));

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());
