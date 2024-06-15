import { Component } from '@angular/core';
import { cloneDeep } from 'lodash';
import { tap } from 'rxjs';
import { AccortezzaSostituzione } from 'src/app/Models/AccortezzaSostituzione';
import { AccortezzeService } from 'src/app/Services/accortezze.service';

@Component({
  selector: 'app-accortezze',
  templateUrl: './accortezze.component.html',
  styleUrl: './accortezze.component.less'
})
export class AccortezzeComponent {

  constructor(private accortezzeService: AccortezzeService) {}

  public itemList: AccortezzaSostituzione[] = [];
  public selectedItem: AccortezzaSostituzione;
  public selectedId: number;

  public viewSidebarVisibile: boolean = false;
  public editSidebarVisibile: boolean = false;
  public deleteDialogVisible: boolean = false;
  public loading: boolean = true;

  ngOnInit(): void {
    this.loading = true; // Imposta il caricamento su true prima di iniziare il caricamento dei dati
    this.getList(); // Chiamata per caricare i dati
  }
//#region   CRUD
  getList(): void {
    this.accortezzeService.getItems().subscribe((itemList) => {
      this.itemList = itemList;
      setTimeout(() => {
        // Dopo aver caricato i dati o completato il processo
        this.loading = false;
      }, 0);
    });
  }
  public viewData(rowIndex: number) {
    this.viewSidebarVisibile = !this.viewSidebarVisibile;
    this.selectedItem = this.itemList[rowIndex];
  }

  public editData(rowIndex?: number) {
    if(rowIndex != null) {
      this.selectedItem = cloneDeep(this.itemList[rowIndex]);
      this.selectedId = rowIndex;
      console.log(rowIndex)
    }
    else
      this.selectedItem = new AccortezzaSostituzione();
      this.editSidebarVisibile = !this.editSidebarVisibile;
  }

  public patchDataAfterSaveOrUpdate(editedItem: AccortezzaSostituzione) {
    const saveOrUpdateItem: AccortezzaSostituzione = cloneDeep(editedItem);
    if(this.selectedId)
      this.itemList[this.selectedId] = saveOrUpdateItem;
    else
      this.itemList.push(saveOrUpdateItem);
    delete this.selectedId;
    this.editSidebarVisibile = false;
  }

  public deleteData() {
    this.accortezzeService.deleteItem(this.selectedItem.id)
      .pipe(
        tap(() => {
          this.itemList.splice(this.selectedId, 1);
          this.deleteDialogVisible = false;
        })
      )
      .subscribe();
  }
}
