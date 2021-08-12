import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products-app-frontend';
  info={
    name:'Zeinabou',
    email:'zeinab@gmail.com',
    tel: '079987654'
  }
  comments=[];
  comment={
    date: null,
    message:''
  };

  newComment=false;

  addComment(){
    if (this.comment.message!=''){
      // @ts-ignore
      this.comment.date= new Date();
      this.comments.push({
        // @ts-ignore
        date:this.comment.date,
        // @ts-ignore
        message: this.comment.message

      });
      //this.comment.message='';


    }
  }
}
