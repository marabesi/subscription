export default class Campain {
  constructor(
    private id: number,
    private description: string
  ) { }

  getId(): number {
    return this.id
  }

  getDescription(): string {
    return this.description
  }
}