import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    name = 'Electra X4';
    description = 'A sweet bike built for comfort.';
    category = 'EV';
    price = 40000;
    material = 'Fiber';
    picUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';

    ready = false;
    connectedCallback() {
        setTimeout(() => {
            this.ready = true;
        }, 6000);
    }
}