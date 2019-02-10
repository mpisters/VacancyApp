export class Vacancy {
  constructor(public title: string,
              public company: string,
              public description: string,
              public skills: string[],
              public offered: string[]) {}
}
