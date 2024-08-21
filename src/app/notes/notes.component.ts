import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private http:HttpService) { }
  
   
  ngOnInit(): void {
   

  }


  // Showing Add Notes Form -------------------------------------------------------------------
  openAddNotes(e:Event) :void{
    const doc1 = document.getElementById('inputbox1');
    const doc2 = document.getElementById('inputbox2');
 
    if(doc1?.style.display=='none' && doc2?.style.display=='block') {
      doc1.style.display='block';
      doc2.style.display='none'
    }
    else {
      doc1!.style.display='none';
      doc2!.style.display='block'
    }
  }
  

// Adding Notes -------------------------------------------------------------------
  title:any="";
  description:any="";
  notesInput(e:any){
 
    if(e.key=='Enter'){
      this.openAddNotes(e);
      console.log("enter is pressed")
      this.http.addNotes(this.title ,this.description).subscribe({
        next:(res)=>{
          // console.log(res);
          console.log(this.title);
          console.log(this.description);
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  }
}
