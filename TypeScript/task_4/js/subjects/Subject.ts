// task_4/js/subjects/Subject.ts
/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    protected teacher!: Teacher;

    // "setter method" كما هو مطلوب (دالة تعيين)
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
