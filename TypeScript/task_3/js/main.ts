/// <reference path="./crud.d.ts" />

import type { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// إنشاء كائن من نوع RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// إدراج صف جديد
const newRowID: RowID = CRUD.insertRow(row);

// تحديث الصف
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// حذف الصف
CRUD.deleteRow(newRowID);
