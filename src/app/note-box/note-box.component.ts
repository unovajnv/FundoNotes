import { Component, OnInit } from '@angular/core';
import { NotesService } from '../service/notes/notes.service';
import { Input } from '@angular/core';
import { SharedService } from '../service/shared/shared.service';
@Component({
  selector: 'app-note-box',
  templateUrl: './note-box.component.html',
  styleUrls: ['./note-box.component.scss']
})
export class NoteBoxComponent implements OnInit {

  sharedValue: string='';
  // @Input() searchQ: string='';
  constructor(private notesService:NotesService, private sharedService:SharedService) { }

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
  
}
  



 
  

