import { Component } from "@angular/core";
import { DeseosProvider } from "../../providers/deseos/deseos";

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})

export class TerminadosPage {
    constructor(
        public deseosService: DeseosProvider
    ){

    }

}