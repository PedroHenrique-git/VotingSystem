export default class Option {
  private numberOfVotes: number;
  private static instance = 0;
  constructor(private name: string, private numberToVote: number) {
    this.numberOfVotes = 0;
    Option.instance += 1;
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

  get TotalNumberOfVotes(): number {
    return this.numberOfVotes;
  }

  addNumberOfVotes(): void {
    this.numberOfVotes += 1;
  }

  getId(): number {
    return Option.instance;
  }
}
