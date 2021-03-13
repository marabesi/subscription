import Campain from './Campain'

describe('entity: campain', () => {
  it.each(
    [
      [1, 'newsletter'],
      [2, 'sales'],
    ]
  )('build campain with id (%s) and description (%s)', (id: number, description: string) => {
    const campain = new Campain(id, description)

    expect(campain.getId()).toEqual(id)
    expect(campain.getDescription()).toEqual(description)
  })
})