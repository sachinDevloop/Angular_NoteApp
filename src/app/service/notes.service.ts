import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

public openNoteModuleSub:Subject<boolean>;
  formValue: any;

  constructor() { 
this.openNoteModuleSub=new Subject<boolean>();

  }

  getlatestnoteid()
  {

    const isData= localStorage.getItem('noteData');
    if(isData != null)
    {
      const parseArray= JSON.parse(isData);
      return parseArray.length + 1;
    }else{
      return 1;
    }
  }

  

  addNote(noteObj: any)
  {
    var ide= (<HTMLInputElement>document.getElementById('ide')).value;
    var Title= (<HTMLInputElement>document.getElementById('Title')).value;
    var Body= (<HTMLInputElement>document.getElementById('Body')).value;
    console.log(noteObj);
    if(ide != '0')
    {
      noteObj.id=ide;
      noteObj.Title=Title;
      noteObj.Body=Body;
      
      noteObj.CreationDate=new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    this.editNotes(noteObj);
    }else{
   
    noteObj.id=this.getlatestnoteid();
    const isData= localStorage.getItem('noteData');

    
    if(isData == null)
    {

      const noteArray= [];
      noteArray.push(noteObj);
      localStorage.setItem('noteData',JSON.stringify(noteArray));


    }else{
const parseArray=JSON.parse(isData);
parseArray.push(noteObj);
localStorage.setItem('noteData',JSON.stringify(parseArray));



    }
    }
   
  }


  
loadNotes()
{
  

const isData= localStorage.getItem('noteData');

if(isData != null)
{
return JSON.parse(isData)

}else{

  const EmptyArray: any[] = [];
  return EmptyArray;
}

  
}



 
  
deleteNotes(note: any)
{
  
  //note.id=this.getlatestnoteid();
const isData= localStorage.getItem('noteData')!;
const parseArray=JSON.parse(isData);

for(let index=0;index < parseArray.length; index++)
{ 
  
  if(note.id == parseArray[index].id)
  {
    
    parseArray.splice(index,1);
  }
}
localStorage.setItem('noteData',JSON.stringify(parseArray));




}


editNotes(note: any)
{



  //note.id=this.getlatestnoteid();
const isData= localStorage.getItem('noteData')!;
var parseArray=JSON.parse(isData);

const id = note.id;

for(let index=0;index < parseArray.length; index++)
{ 
 
  if(note.id == parseArray[index].id)
  {
    
    parseArray.splice(index,1);
  }
}


parseArray.push(note);

localStorage.setItem('noteData',JSON.stringify(parseArray));


}


}