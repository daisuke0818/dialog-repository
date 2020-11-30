import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  test = { id: 0, name: 'aaaaa' };
  constructor(public dialog: MatDialog) {}

  // ** dialog内の選択肢 */
  data: string[] = [];

  // 結果表示用のアレ
  resultData = '';
  ngOnInit(): void {
    console.log(Object.isFrozen(this.test));
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.resultData = '';
      }
      console.log(result);
      this.resultData = result;
    });
  }
}
