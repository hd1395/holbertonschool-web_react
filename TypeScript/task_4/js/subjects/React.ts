// task_4/js/subjects/React.ts
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: إضافة خاصية اختيارية لتجربة تدريس React
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (!this['teacher'] || !this['teacher'].experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this['teacher'].firstName}`;
    }
  }
}
