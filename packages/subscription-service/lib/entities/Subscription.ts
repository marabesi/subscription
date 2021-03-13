import Campain from './Campain';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}

export default class Subscription {
  constructor(
    private campain: Campain,
    private email: string,
    private name: string = '',
    private gender: Gender | null,
    private dateOfBirth: Date,
    private consent: boolean,
  ) { }

  getCampain(): Campain {
    return this.campain
  }

  getEmail(): string {
    return this.email
  }

  getName(): string {
    return this.name
  }

  getGender(): string {
    return this.gender
  }

  getDateOfBirth(): Date {
    return this.dateOfBirth
  }

  getConsent(): boolean {
    return this.consent
  }
}