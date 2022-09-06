import { Component } from '@angular/core';
import { NotesService } from './service/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private noteSrv: NotesService)
{


}

  title = 'NotesApp';

  openNote()
  {
    
this.noteSrv.openNoteModuleSub.next(true);

  }
  
}
