// import { Component } from '@angular/core';
import JSZip, * as JSZIP from 'jszip';
// import { URL } from 'url';
// import { saveAs } from 'file-saver';

import { Component } from '@angular/core';
// import JSZip, * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs'; // Correct import of forkJoin
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-document-up-zip-down',
  standalone: true,
  imports: [],
  templateUrl: './document-up-zip-down.component.html',
  styleUrl: './document-up-zip-down.component.css'
})
export class DocumentUpZipDownComponent {

  constructor(private http: HttpClient) {

  }
  // documents = [
  //   { name: 'document1.txt', content: 'This is the first document content.' },
  //   { name: 'document2.txt', content: 'This is the second document content.' },
  //   { name: 'document3.txt', content: 'This is the third document content.' },
  // ];

  // documents = [
  //   {
  //     name: 'document1.xls',
  //     content: 'data:application/vnd.ms-excel;base64,UEsDBBQAAAAIAFc9YPJDBTkZDqg9pLKHcGAsUBIgRqaM6gFAAA9XFSnG1MFAEDt0/34g/d10O8kZYh3DwdBHiVThAgOGdeHqaYrfa43Oekn88HvgeHrOBh8A61PzVXNO46H17c9pSO2N30=' // Base64 Excel file
  //   },
  //   {
  //     name: 'image1.jpg',
  //     content: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkIDwoHCAoLBw4MBgsMBw4NDw8MDA4QDw4YGRgZGBoYHBwZGBoYHBsZGR4ZGhsYHB4YHRYfISImIi5pIhYpJz45KyAhLx46LDAhLU8j/2wBDAQwIEAwWEgIuRjp0KC8+PjrF9/rZhg0p' // Base64 JPG image
  //   },
  //   {
  //     name: 'document2.pdf',
  //     content: 'data:application/pdf;base64,JVBERi0xLjQKJeLjz8ou77+1vlgz6U6b3rbUchH3y0BFuOZ77Rr9OtUtVwH46BPhZdHbeebzqUwU+Pmmz1wZp53JhbXlz0z5y3jTzT8zK5FyBpklnH3bHEwJ5VYc4m8dVnFmjtxF0ePDRpHRhKnlgAoqh7fxOg==' // Base64 PDF file
  //   }
  // ];


  documents: any[] = [
    {
      name: 'Student Image Upload',
      content: 'https://d1hfw03022jglv.cloudfront.net/2887/student_img/AZLAN_20241128110756.jpg'
    },
    {
      name: 'document1111.jpg',
      content:
        'https://images-americanas.b2w.io/produtos/4158226624/imagens/cactos-pelucia-dancante-e-falante-toca-musica-repete-fala-brinquedo-cactus-infantil-canta-danca-fala-imita-gira-luz-pronta-entrega/4158226641_1_xlarge.jpg',
    }
  ];

  // downloadZip(){
  //   console.log("download zips....");

  //   const zip= new JSZip();

  //   this.documents.forEach((element:any)=>{
  //     zip.file(element.name,element.content)
  //   })

  //   zip.generateAsync({type:'blob'}).then((content:any)=>{
  //     console.log("contents",content);
  //     // const link=document.createElement('a');
  //     // link.href=URL.createObjectURL(c);
  //     // link.download='doc.zip';
  //     // link.click();

  //     saveAs(content, 'documents.zip');
  //   })
  // }
  // downloadZip() {
  //   console.log('Downloading files and creating zip...');

  //   const zip = new JSZip(); // Create a new zip file

  //   // Map each document to a download request
  //   const fileRequests = this.documents.map((document: any) =>
  //     this.downloadFile(document.content).pipe(
  //       map((fileContent:any) => {
  //         zip.file(document.name, fileContent); // Add each file to the zip
  //       })
  //     )
  //   );

  //   // Run all download requests concurrently
  //   forkJoin(fileRequests).subscribe(
  //     () => {
  //       // Once all files are downloaded, generate the zip
  //       zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
  //         // Save the zip file
  //         saveAs(content, 'documents.zip');
  //       });
  //     },
  //     (error) => {
  //       console.error('Error downloading files', error);
  //     }
  //   );
  // }

  zipname='';

  downloadZip() {
    const zip = new JSZip();
    const fileRequests = this.documents.map((doc:any) =>
      this.http.get(doc.content, { responseType: 'arraybuffer' }).pipe(
        map((data:any) => {
          this.zipname=doc.name;
          zip.file(doc.name, data);
        })
      )
    );

    forkJoin(fileRequests).subscribe(() => {
      zip.generateAsync({ type: 'blob' }).then((content:any) => {
        saveAs(content,this.zipname+'.zip');
      });
    });
  }

  // Helper function to download a file from URL
  downloadFile(url: string) {
    return this.http.get(url, { responseType: 'arraybuffer' });
  }
}
