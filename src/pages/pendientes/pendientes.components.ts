import { Component } from "@angular/core";
import { DeseosProvider } from "../../providers/deseos/deseos";

import { Lista } from "../../app/models";

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage {
    constructor(
        public deseosService: DeseosProvider
    ){

    }

    listaSeleccionada(lista: Lista){
        console.log(lista);
    }
}