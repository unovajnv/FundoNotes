import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../service/http.service'
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { NotesService } from '../service/notes/notes.service';
@Component({
  selector: 'app-note-box',
  templateUrl: './note-box.component.html',
  styleUrls: ['./note-box.component.scss']
})
export class NoteBoxComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router, private titleService: Title , private notesService:NotesService) { }

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
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
}
  



 
  

