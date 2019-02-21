export class JobApplication {
  constructor(public id: string,
              public email: string,
              public phoneNumber: string,
              public gender: string,
              public firstName: string,
              public middleName: string,
              public lastName: string,
              public dataOfBirth: Date,
              public zipCode: string,
              public houseNumber: number,
              public annex: string,
              public experienceLevel: string,
              public motivation: string,
              public CVname: string
  ) {
  }
}
