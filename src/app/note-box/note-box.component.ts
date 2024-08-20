import { Component, OnInit } from '@angular/core';
import { NotesService } from '../service/notes/notes.service';
@Component({
  selector: 'app-note-box',
  templateUrl: './note-box.component.html',
  styleUrls: ['./note-box.component.scss']
})
export class NoteBoxComponent implements OnInit {

  constructor(private notesService:NotesService) { }

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
  }
}
  



 
  

