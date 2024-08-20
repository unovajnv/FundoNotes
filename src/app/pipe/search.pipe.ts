import { Pipe, PipeTransform } from '@angular/core';
import { NotesService } from '../service/notes/notes.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  constructor(private notesService: NotesService) { }
  allNotes:any[] = [];

  ngOnInit(): void {
    this.notesService.getAllNotesApiCall("getNotesList").subscribe({
      next: (res: any) => {
        this.allNotes = res.data.data;
      },
      error: (e) => {
        console.log('Error occurred: ', e);
      },
    });
  }
  transform(allNotes:any[], searchQuery:string): any {
    
    if (!searchQuery) {
      return allNotes;
    }
    if (!allNotes){
      return [];
    }
    return allNotes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.description.toLowerCase().includes(searchQuery.toLowerCase()));
  }

}
