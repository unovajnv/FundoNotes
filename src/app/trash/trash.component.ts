import { Component, OnInit } from '@angular/core';
import { NotesService } from '../service/notes/notes.service';



@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

   constructor(private notesService:NotesService) { }

   headVal:string = "Trash";
  notesList: any[] =[];
  ngOnInit(): void {
    this.notesService.getAllNotesApiCall("getNotesList").subscribe({
      next: (r: any) => {
        this.notesList = r.data.data;
        console.log('result is: ', this.notesList);
      },
      error: (e) => {},
    });
  }

}


