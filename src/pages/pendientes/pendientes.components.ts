import { Component } from "@angular/core";
import { DeseosProvider } from "../../providers/deseos/deseos";

import { Lista } from "../../app/models";
import { NavController, AlertController } from "ionic-angular";
import { AgregarPage } from "../agregar/agregar";

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage {
    constructor(
        public deseosService: DeseosProvider,
        private navCtrl: NavController,
        private alertCtrl: AlertController
    ){

    }

    listaSeleccionada(lista: Lista){
        console.log(lista);
    }
    agregarLista(){
        //this.navCtrl.push(AgregarPage);

        const alerta = this.alertCtrl.create({
            title: 'Nueva lista',
            message: 'Nombre de la nueva lista que desea',
            inputs: [
                {
                    name: 'titulo',
                    placeholder: 'Nombre de la lista'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Agregar',
                    handler: data => {
                        if (data.titulo.length === 0){
                            return;
                        } 
                        this.navCtrl.push( AgregarPage, {
                            titulo: data.titulo
                        });
                    }
                }
            ]
        });
        alerta.present();
    }

}