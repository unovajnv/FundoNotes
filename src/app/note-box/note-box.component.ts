import { Component, OnInit } from '@angular/core';
import { NotesService } from '../service/notes/notes.service';
import { SharedService } from '../service/shared/shared.service';
import { HttpService } from '../service/http.service';
@Component({
  selector: 'app-note-box',
  templateUrl: './note-box.component.html',
  styleUrls: ['./note-box.component.scss']
})
export class NoteBoxComponent implements OnInit {

  sharedValue: string='';
  // @Input() searchQ: string='';
  constructor(private notesService:NotesService, private sharedService:SharedService, private http : HttpService) { }

  notesList: any[] =[];
  ngOnInit(): void {
    this.notesService.getAllNotesApiCall("getNotesList").subscribe({
      next: (res: any) => {
        this.notesList = res.data.data;
        console.log('result is: ', this.notesList);
      },
      error: (e) => {
        console.log('Error occurred: ', e);
      },
    });
    this.sharedService.currentData.subscribe(data => this.sharedValue = data);
  }

  //----------------Delete data -------------------------------
  deleteData(id:any): void{
     console.log(id);
     this.notesList.filter((d)=>{
         if(d.id === id)
         {
          d.isDeleted = true;
          // this.http.addNotes(d.title ,d.description).subscribe({
          //   next:(res)=>{
          //     console.log(d.title);
          //     console.log(d.description);
          //   },
          //   error:(err)=>{
          //     console.log(err)
          //   }
          // })
         }
     })
     
  }

  //----------------Archive data -------------------------------
  archiveData(id:any): void{
    console.log(id);
    this.notesList.filter((d)=>{
        if(d.id === id)
        {
         d.isArchived = true;
        }
    })
  }
}
  



 
  

