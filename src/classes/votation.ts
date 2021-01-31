import Option from "./options";

export default class Votation {
  private options: Option[] = [];
  constructor(private pollQuestion: string) {}

  get PollQuestion(): string {
    return this.pollQuestion;
  }

  get Options(): Option[] {
    return this.options;
  }

  addOption(candidate: Option): void {
    this.options.push(candidate);
  }

  removeOption(name: string): void {
    const newCandidates = this.options.filter((option) => option.Name !== name);
    this.options = newCandidates;
  }

  addVote(voteNumber: number): void {
    this.options.forEach((option) => {
      if (voteNumber === option.NumberToVote) {
        option.addNumberOfVotes();
      }
    });
  }
}
