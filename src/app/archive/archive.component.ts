import { Component, OnInit } from '@angular/core';
import { NotesService } from '../service/notes/notes.service';
import { NoteBoxComponent } from '../note-box/note-box.component';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private notesService:NotesService, private noteBoxComponent: NoteBoxComponent) { }

    notesList: any[] =[];
    headVal:string = "Archive";
    
    ngOnInit(): void {

      // this.notesList =NoteBoxComponent.notesList;

      this.notesService.getAllNotesApiCall("getNotesList").subscribe({
        next: (res: any) => {
          this.notesList = res.data.data;
          console.log('result: ', this.notesList);
        },
        error: (e) => {},
      });
    }
}









// import { Component, OnInit } from '@angular/core';
// // import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpService } from '../service/http.service'
// import { Router } from '@angular/router';
// import { Title } from '@angular/platform-browser';
// import { environment } from 'src/environments/environment';
// import { NotesService } from '../service/notes/notes.service';



// @Component({
//   selector: 'app-trash',
//   templateUrl: './trash.component.html',
//   styleUrls: ['./trash.component.scss']
// })
// export class TrashComponent implements OnInit {

//    constructor(private httpService: HttpService, private router: Router, private titleService: Title , private notesService:NotesService) { }

//   notesList: any[] =[];
//   ngOnInit(): void {
//     this.notesService.getAllNotesApiCall("getNotesList").subscribe({
//       next: (r: any) => {
//         this.notesList = r.data.data;
//         console.log('result is: ', this.notesList);
//       },
//       error: (e) => {},
//     });
//   }

// }


