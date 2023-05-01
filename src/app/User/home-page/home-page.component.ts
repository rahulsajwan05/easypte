import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormControl , Validator , FormGroup, Validators, MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  submitform:FormGroup;
  shows: boolean = false;
  idd: number;
  newidd:number;
  showid :number;
  title: string;
  showShortDesciption = true;
  show = false;
  para1:string='Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis'+
                'Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis'+
                'Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis'+
                'Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis';
               
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
                  // {
                  //   id: 3,
                  //   title: 'Card Title 3',
                  //   description: 'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+
                  //   'Some quick example text to build on the card title and make up the bulk of the card content',
                  //   buttonText: 'Button',
                  //   img: '../../../assets/Home Page/girl.jpg',
                  //   visible: false
                  // },
                  // {
                  //   id: 4,
                  //   title: 'Card Title 3',
                  //   description: 'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+
                  //   'Some quick example text to build on the card title and make up the bulk of the card content',
                  //   buttonText: 'Button',
                  //   img: '../../../assets/Home Page/girl.jpg',
                  //   visible: false
                  // },
                  // {
                  //   id: 5,
                  //   title: 'Card Title 3',
                  //   description: 'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+
                  //   'Some quick example text to build on the card title and make up the bulk of the card content',
                  //   buttonText: 'Button',
                  //   img: '../../../assets/Home Page/girl.jpg',
                  //   visible: false
                  // },
                  // {
                  //   id: 6,
                  //   title: 'Card Title 3',
                  //   description: 'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+ 
                  //   'Some quick example text to build on the card title and make up the bulk of the card content'+
                  //   'Some quick example text to build on the card title and make up the bulk of the card content',
                  //   buttonText: 'Button',
                  //   img: '../../../assets/Home Page/girl.jpg',
                  //   visible: false
                  // },
                ];

                // department=[
                //   {id:1 , name:"rahul"},
                //   {id:1 , name:"onkar"},
                //   {id:1 , name:"joshi"},
                  
                // ];

                // selectedGroup: any;


  constructor() { }

  // getVal() {
    
  //   console.log(this.selectedGroup); // returns selected object
  //   console.log(this.selectedGroup.id); // returns selected option's id
  //   console.log(this.selectedGroup.name)
  // }

  
  // getVal() {
  //   console.log(this.department.filter(x => x.name == this.selectedGroup)[0].name)
  //   localStorage.setItem("name",this.department.filter(x => x.name == this.selectedGroup)[0].name)
  // }


  ngOnInit() {
    this.submitform = new FormGroup({
      'name' : new FormControl(null , [ Validators.required , Validators.minLength(5)]),
      'email': new FormControl (null , [Validators.required, Validators.email]),
      'mobile' : new FormControl (
                        null, 
                        [ Validators.required , 
                          // Validators.pattern('^[6-9]\d{9}$'),
                          // Validators.minLength(10),
                          // Validators.maxLength(10)
                        ]),
    });
  };

  submitformbutton() {
    console.log(this.submitform.value);
    this.submitform.reset();
  }

  modelopen(id: number) {
    console.log("clikc" + id);
    this.title = this.cards[id].description;
    console.log(this.title);
    

  }

  get name(){
    return this.submitform.get('name');
  }

  get email(){
    return this.submitform.get('email');
  }

  get mobile(){
    return this.submitform.get('mobile');
  }
}
