import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/notes.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: any;
 
  constructor(private noteSrv: NotesService, private homeSrv: HomeComponent) { }

  ngOnInit(): void {
  }

delete(note: any)
{
  
this.noteSrv.deleteNotes(note);

this.homeSrv.getNotes();

}

onedit(note: any)
{
 
this.homeSrv.openNoteModel();

  this.homeSrv.oneditp(note);
}

edit(note: any): void
{
  
this.noteSrv.editNotes(note);
}

}
