// task_3/js/crud.d.ts

// استيراد الأنواع من interface.ts (كما طُلِب)
import type { RowID, RowElement } from './interface';

// نعلن وحدة (module) مطابقة لمسار الاستيراد الفعلي './crud'
declare module './crud' {
  import type { RowID, RowElement } from './interface';

  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
