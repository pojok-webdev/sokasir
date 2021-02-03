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
  id:1,name:'Ayam Bakar Lezaa',price: 65000,img:'../../assets/catalog/ayam-bakar-lezaa.png',amount:0
},
{
  id:2,name:'Ayam Goreng Merdeka',price: 75000,img:'../../assets/catalog/ayam-goreng-merdeka.png',amount:0
}],
[{
  id:3,name:'Ayam Krispy Merdeka',price: 75000,img:'../../assets/catalog/ayam-krispy-merdeka.png',amount:0
},
{
  id:4,name:'Ayam Merdeka',price: 75000,img:'../../assets/catalog/ayam-merdeka.png',amount:0
}],
[{
  id:5,name:'Ayam Panggang',price: 65000,img:'../../assets/catalog/ayam-panggang.png',amount:0
},
{
  id:6,name:'Iga Bakar Merdeka',price: 75000,img:'../../assets/catalog/iga-bakar-merdeka.png',amount:0
}],
[{
  id:7,name:'Puding Merdeka',price: 35000,img:'../../assets/catalog/puding-merdeka.png',amount:0
},
{
  id:8,name:'Salad Merdeka',price: 75000,img:'../../assets/catalog/salad-merdeka.png',amount:0
}]
]
buy = []
  constructor(private route:Router,private modal: ModalController) { }

  ngOnInit() {
  }
  checkExist(obj,objarray){
    if(objarray.includes(obj)){
      let i = objarray.indexOf(obj)
      objarray[i].amount = objarray[i].amount+1
      console.log("Index of obj is ",i)
      console.log("that obj exists")
    }else{
      obj.amount = 1
      console.log("that object doesnt exists")
    }
  }
  addTotal(obj){
    console.log("Invoked",obj)
    this.checkExist(obj,this.buy)
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
  cekAmount(obj){
    if(obj.amount>0){
      return "danger"
    }else{
      return "primary"
    }
  }
  addAmount(obj){
    console.log("invoked")
    this.addTotal(obj)
  }
  reduceAmount(obj){
    if(this.buy.includes(obj)){
      let i = this.buy.indexOf(obj)
      this.buy[i].amount = this.buy[i].amount-1
      console.log("Remove Index of obj is ",i)
      console.log("that remove obj exists")
    }else{
      console.log("that remove object doesnt exists")
    }
  }
}
