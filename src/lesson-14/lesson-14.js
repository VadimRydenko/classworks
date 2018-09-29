import './lesson-14.scss';

import {trafficLight} from './scripts/traffic-lighter';
import {Lighter} from './scripts/lighter';
import {LampController} from './scripts/lamp-controller';

const lighter1 = new Lighter(document.querySelector('.lighter-1'), 'green');
const lighter2 = new Lighter(document.querySelector('.lighter-2'), 'yellow');
const controller = new LampController (document.querySelector('.container'));

lighter1.render();

trafficLight(document.querySelector('.place_for_traffic_light'));


