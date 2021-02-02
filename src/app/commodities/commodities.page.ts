import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ReceiptPage } from '../receipt/receipt.page';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.page.html',
  styleUrls: ['./commodities.page.scss'],
})
export class CommoditiesPage implements OnInit {
total = 0
commodities = [[{
  id:1,name:'Ayam Bakar Lezaa',price: 65000,img:'../../assets/catalog/ayam-bakar-lezaa.png'
},
{
  id:2,name:'Ayam Goreng Merdeka',price: 75000,img:'../../assets/catalog/ayam-goreng-merdeka.png'
}],
[{
  id:3,name:'Ayam Krispy Merdeka',price: 75000,img:'../../assets/catalog/ayam-krispy-merdeka.png'
},
{
  id:4,name:'Ayam Merdeka',price: 75000,img:'../../assets/catalog/ayam-merdeka.png'
}],
[{
  id:5,name:'Ayam Panggang',price: 65000,img:'../../assets/catalog/ayam-panggang.png'
},
{
  id:6,name:'Iga Bakar Merdeka',price: 75000,img:'../../assets/catalog/iga-bakar-merdeka.png'
}],
[{
  id:7,name:'Puding Merdeka',price: 35000,img:'../../assets/catalog/puding-merdeka.png'
},
{
  id:8,name:'Salad Merdeka',price: 75000,img:'../../assets/catalog/salad-merdeka.png'
}]
]
buy = []
  constructor(private route:Router,private modal: ModalController) { }

  ngOnInit() {
  }
  addTotal(obj){
    this.total += obj.price
    this.buy.push(obj)
  }
  async showReceipt(){
    const modal = await this.modal.create({
      component:ReceiptPage,
      componentProps:{objs:this.buy,total:this.total}
    })
    return await modal.present()
  }
  reset(){
    this.total = 0
    this.buy = []
  }
}
