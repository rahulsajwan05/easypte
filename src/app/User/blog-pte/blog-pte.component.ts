import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog-pte',
  templateUrl: './blog-pte.component.html',
  styleUrls: ['./blog-pte.component.css']
})
export class BlogPteComponent implements OnInit {

  // title : string;
  shows: boolean = false;
  idd: number;
  newidd:number;
  showid :number;
  title: string;
  showShortDesciption = true;
  show = false;
  cards = [
    {
      id: 0,
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  'Some quick example text to build on the card title and make up the bulk of the card content'+
                  'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  'Some quick example text to build on the card title and make up the bulk of the card content'+
                  'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/Home Page/girl.jpg',
      visible: false
    },
    {
      id: 1,
      title: 'Card Title 2',
      description: 'Some quick example text to buof the card content',
      buttonText: 'Button',
      img: '../../../assets/Home Page/girl.jpg',
      visible: false
    },
    {
      id: 2,
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'+ 
      'Some quick example text to build on the card title and make up the bulk of the card content'+
      'Some quick example text to build on the card title and make up the bulk of the card content'+ 
      'Some quick example text to build on the card title and make up the bulk of the card content'+ 
      'Some quick example text to build on the card title and make up the bulk of the card content'+
      'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/Home Page/girl.jpg',
      visible: false
    },
    {
      id: 3,
      title: 'Card Title 4',
      description: 'descritption 4',
      buttonText: 'Button',
      img: '../../../assets/Home Page/girl.jpg',
      visible: false
    },

    {
      id: 4,
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  'Some quick example text to build on the card title and make up the bulk of the card content'+
                  'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  'Some quick example text to build on the card title and make up the bulk of the card content'+
                  'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/Home Page/girl.jpg',
      visible: false
    },

    {
      id: 5,
      title: 'Card Title 6',
      description: 'descritption 7'+   
      'Some quick example text to build on the card title and make up the bulk of the card content'+
      'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/Home Page/girl.jpg',
      visible: false
    },

  ];


  constructor() { }


  ngOnInit(): void {
  }

  modelopen(id: number) {
    console.log("clikc" + id);
    this.title = this.cards[id].description;
    console.log(this.title);
    

  }

  

  alterDescriptionText(id:number) {
    this.showid=id
    console.log(this.showid)
    this.newidd= id
    console.log(this.newidd)
    // if(this.showid===this.newidd){
    //   console.log("fdfsd");
    // } else {
     
    // }

    this.showShortDesciption = !this.showShortDesciption
    console.log(this.showShortDesciption)
  }

  hide(id: number) {
    console.log(id);
    this.idd = id;
    console.log("idd" + this.idd)
    this.shows = false;
  }

  showbtn(id: number) {
    // console.log(id);
    this.idd = id;
    this.shows = true;
    console.log(this.shows)
    console.log("idd" + this.idd)
    // this.show=false;  
  }


}
