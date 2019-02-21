export class Vacancy {
  constructor(public id: number,
              public title: string,
              public company: string,
              public description: string,
              public skills: string[],
              public offered: string[]) {
  }
}
