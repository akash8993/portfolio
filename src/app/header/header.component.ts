import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
downloadFile() {
  
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
