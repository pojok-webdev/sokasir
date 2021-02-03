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
      console.log("Pre Totallyy",this.total)
      let i = objarray.indexOf(obj)
      this.total = 1*this.total + 1*obj.price
      objarray[i].amount = objarray[i].amount+1
      objarray[i].price = objarray[i].price+obj.price
      console.log("Index of obj is ",i)
      console.log("that obj exists",obj)
      console.log("Totallyy",this.total)
      this.sum(this.buy)
    }else{
      obj.amount = 1
      this.total = 1*this.total+ 1*obj.price
      console.log("that object doesnt exists",this.total)
      this.sum(this.buy)
      objarray.push(obj)
    }
  }
  addTotal(obj){
    console.log("Invoked",obj)
    this.total = 1*this.total + 1*obj.price
    //this.checkExist(obj,this.buy)
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
    this.buy.every(obj=>{
      obj.amount = 0
      obj.price = 0
    })
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
    let x = this.buy.indexOf(obj)
    console.log("X",x)
    if(x>=0){
      this.total = this.total - obj.price
      this.buy.splice(x,1)
      this.sum(this.buy)
    }
  }
  _reduceAmount(obj){
    if(this.buy.includes(obj)){
      let i = this.buy.indexOf(obj)
      this.total = this.total - obj.price
      this.buy[i].amount = this.buy[i].amount-1
      this.total = 1*this.total - 1*obj.price
      console.log("Remove Index of obj is ",i)
      console.log("that remove obj exists")
      this.sum(this.buy)
    }else{
      this.sum(this.buy)
      console.log("that remove object doesnt exists")
    }
  }
  sum(buy){
    var result = [];
    buy.reduce(function(res, value) {
      console.log("reduce res",res)
      console.log("reduce value",value)
      if (!res[value.id]) {
        res[value.id] = { id: value.id,name:value.name, amount: 0 };
    //    result.push(res[value.Id])
      }
      res[value.id].amount += value.amount;
      console.log("Res Sum",res)
      return res;
    }, {});
  }
}
