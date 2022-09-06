import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {


  noteObj: any;
  noteArray: any[];

  constructor(private noteSrv: NotesService) { 

    this.noteObj = {
      Title: '' ,
      Body: '' ,
      CreationDate: ''
       };
this.noteArray = [];

  }

  ngOnInit(): void {
    this.getNotes();
  }

  oneditp(note: any)
  {

     (document.getElementById('Title') as HTMLInputElement).value=note.Title;

     (document.getElementById('Body') as HTMLInputElement).value=note.Body;
     (document.getElementById('ide') as HTMLInputElement).value=note.id;

  }

  reset()
    {

      (document.getElementById('Title') as HTMLInputElement).value='';

      (document.getElementById('Body') as HTMLInputElement).value='';
      (document.getElementById('ide') as HTMLInputElement).value='0';
    
    }

getNotes()
{
this.noteArray = this.noteSrv.loadNotes();
}


saveNote()
{
 
this.noteSrv.addNote(this.noteObj);

this.getNotes();
this.closeNoteModel();

}




  ngAfterViewInit()
  {
    this.noteSrv.openNoteModuleSub.subscribe((res:boolean)=>{

      if(res)
      {

        this.openNoteModel();
      }
    })
  }

  openNoteModel()
  {

    const ide =document.getElementById("myModalNote");

    if (ide != null)
    {
      ide.style.display = "block";
    }
  
  }

  closeNoteModel()
  {
    this.reset();

    const ide =document.getElementById("myModalNote");

    if (ide != null)
    {
      ide.style.display = "none";
    }
   
  }

}
