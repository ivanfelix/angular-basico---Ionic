import { Component, Input } from "@angular/core";
import { DeseosProvider } from "../providers/deseos/deseos";
import { AgregarPage } from "../pages/agregar/agregar";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { Lista } from "../app/models";

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})

export class ListasComponent {

    @Input() terminada : boolean = false;
    
    constructor(
        public deseosService: DeseosProvider,
        private navCtrl: NavController,
        private alertCtrl: AlertController
    ){

    }
    borrarLista(lista){
        this.deseosService.eliminarLista(lista);
    }
    listaSeleccionada(lista: Lista){
        console.log(lista);
        this.navCtrl.push(AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        });
    }
    editarLista(lista:Lista, slidingItem:ItemSliding){
        slidingItem.close();
        const alerta = this.alertCtrl.create({
            title: 'Editar lista',
            message: 'Editar el nombre de la lista',
            inputs: [
                {
                    name: 'titulo',
                    placeholder: 'Nombre de la lista',
                    value: lista.titulo
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Guardar',
                    handler: data => {
                        if (data.titulo.length === 0){
                            return;
                        } 
                        lista.titulo = data.titulo;
                        this.deseosService.guardarStorage();
                    }
                }
            ]
        });
        alerta.present();
    }
}