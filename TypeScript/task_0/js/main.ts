// task_0/js/main.ts

// 1) تعريف واجهة الطالب
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2) إنشاء طالبين + مصفوفة
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 20,
  location: 'Riyadh',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 22,
  location: 'Jeddah',
};

export const studentsList: Student[] = [student1, student2];

// 3) إنشاء جدول بڤانيلا JS وعرض firstName و location
const table: HTMLTableElement = document.createElement('table');
table.style.width = '100%';
table.style.borderCollapse = 'collapse';
table.style.fontFamily = 'sans-serif';

// عنواني الجدول (اختياري)
const header: HTMLTableRowElement = document.createElement('tr');

const thName: HTMLTableCellElement = document.createElement('th');
thName.textContent = 'First Name';
thName.style.textAlign = 'left';
thName.style.borderBottom = '1px solid #ccc';
thName.style.padding = '8px';

const thLocation: HTMLTableCellElement = document.createElement('th');
thLocation.textContent = 'Location';
thLocation.style.textAlign = 'left';
thLocation.style.borderBottom = '1px solid #ccc';
thLocation.style.padding = '8px';

header.appendChild(thName);
header.appendChild(thLocation);
table.appendChild(header);

// صفوف الطلاب
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.padding = '8px';
  firstNameCell.style.borderBottom = '1px solid #f0f0f0';

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;
  locationCell.style.padding = '8px';
  locationCell.style.borderBottom = '1px solid #f0f0f0';

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// إلحاق الجدول بالصفحة
document.body.appendChild(table);
