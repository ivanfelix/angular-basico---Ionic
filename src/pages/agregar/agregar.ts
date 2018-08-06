import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { Lista, ListaItem } from '../../app/models';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  lista: Lista;
  nombreItem:string = '';

  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams,
              public deseosService: DeseosProvider
  ) {
    const titulo = this.navParams.get('titulo');
    console.log(this.lista);
    if(this.navParams.get('lista')){
      this.lista = this.navParams.get('lista');
    }else{
      this.lista = new Lista(titulo);
      this.deseosService.agregarLista(this.lista);
    }
  }

  agregarItem(){
    if(this.nombreItem.length === 0){
      return;
    }
      const nuevoItem = new ListaItem(this.nombreItem);
      console.log(nuevoItem);
      this.lista.items.push(nuevoItem);
      this.nombreItem = '';
      this.deseosService.guardarStorage();
  }
  terminado(item: ListaItem){
    item.completado = !item.completado;

    const pendientes = this.lista.items.filter( itemData => {
      return !itemData.completado;
    }).length;
    if(pendientes === 0){
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    }else{
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }

    this.deseosService.guardarStorage();
  }
  borrar(idx: number){
    this.lista.items.splice(idx, 1);
    this.deseosService.guardarStorage();
  }

}
