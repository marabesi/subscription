import Campain from './Campain'
import Subscription, { Gender } from './Subscription'

describe('entity: Subscription', () => {
  it.each(
    [
      [new Campain(1, 'newsletter'), 'my@my.com', '', null, new Date(), false]
    ]
  )('build subscription', (
    campain: Campain,
    email:string,
    name: string,
    gender: Gender,
    dateOfBirth: Date,
    consent: boolean
  ) => {
    const entity = new Subscription(
      campain,
      email,
      name,
      gender,
      dateOfBirth,
      consent
    )

    expect(entity.getCampain().getDescription()).toEqual(campain.getDescription())
    expect(entity.getEmail()).toEqual(email)
    expect(entity.getName()).toEqual(name)
    expect(entity.getGender()).toEqual(gender)
    expect(entity.getDateOfBirth()).toEqual(dateOfBirth)
    expect(entity.getConsent()).toEqual(consent)
  })
})