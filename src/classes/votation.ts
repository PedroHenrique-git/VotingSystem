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

  addOption(option: Option): void {
    if (!this.checksRepeatedOptions(option)) {
      this.options.push(option);
    } else {
      throw new Error(`the option "${option.Name}" already exists`);
    }
  }

  checkIfVoteExists(voteNumber: number): boolean {
    const exists = this.options.findIndex(
      (option) => option.NumberToVote === voteNumber,
    );

    if (exists !== -1) return true;
    return false;
  }

  checksRepeatedOptions(newOption: Option): boolean {
    const exists = this.Options.findIndex(
      (option) => option.Name === newOption.Name,
    );

    if (exists !== -1) return true;
    return false;
  }

  addVote(voteNumber: number): void {
    if (this.checkIfVoteExists(voteNumber)) {
      const index = this.options.findIndex(
        (option) => option.NumberToVote === voteNumber,
      );
      this.Options[index].addNumberOfVotes();
    } else {
      throw new Error(`no option matches the number ${voteNumber}`);
    }
  }
}
