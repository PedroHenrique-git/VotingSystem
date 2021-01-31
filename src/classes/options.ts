export default class Option {
  private numberOfVotes: number;
  constructor(private name: string, private numberToVote: number) {
    this.numberOfVotes = 0;
  }

  set Name(name: string) {
    this.name = name;
  }

  get Name(): string {
    return this.name;
  }

  set NumberToVote(vote: number) {
    this.numberToVote = vote;
  }

  get NumberToVote(): number {
    return this.numberToVote;
  }

  addNumberOfVotes(): void {
    this.numberOfVotes += 1;
  }

  get TotalNumberOfVotes(): number {
    return this.numberOfVotes;
  }
}
