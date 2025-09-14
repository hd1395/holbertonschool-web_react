// task_4/js/subjects/Cpp.ts
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: نضيف خاصية اختيارية جديدة لواجهة Teacher
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (!this['teacher'] || !this['teacher'].experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this['teacher'].firstName}`;
    }
  }
}
