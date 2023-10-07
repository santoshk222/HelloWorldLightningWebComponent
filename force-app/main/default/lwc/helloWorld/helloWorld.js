import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'World';

    changehandler(event){
        this.greeting=event.target.value;
    }

}