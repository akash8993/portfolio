import { Component, OnInit } from '@angular/core';
import { FileService } from './FileService';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  
    const fileName = 'Akash_Gupta_Resume_April2024.pdf'; // Replace with the name of your file
    const filePath = `/assets/${fileName}`;

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', filePath);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  

}
