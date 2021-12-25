import { Component, OnInit } from '@angular/core';
import  jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-laporan-penjualan',
  templateUrl: './laporan-penjualan.component.html',
  styleUrls: ['./laporan-penjualan.component.scss']
})
export class LaporanPenjualanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// export class AppComponent {
//   title = 'html-to-pdf';

// generatePDF() {
//   var data = document.getElementById('contentToConvert');
//   html2canvas(data).then(canvas => {
//     var imgWidth = 208;
//     var imgHeight = canvas.height * imgWidth / canvas.width;
//     const contentDataURL = canvas.toDataURL('image/png')
//     let pdf = new jsPDF('p', 'mm', 'a4');
//     var position = 0;
//     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
//     pdf.save('newPDF.pdf');
//   });
// }
// }
