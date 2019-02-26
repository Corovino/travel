import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  public imageURL : string;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  fileChange(event) {
    const files = event.target.files;

    const data = new FormData();

    data.append('files', files[0]);
    data.append('UPLOADCARE_STORE', '1' );
    data.append('UPLOADCARE_PUB_KEY', '5f88961871f6d75d6875');

    this.http.post('https://upload.uploadcare.com/base',data)
    .subscribe( event => {
       console.log(event);
       this.imageURL = event.json().file;
    })
    console.log(files);

  }

}
