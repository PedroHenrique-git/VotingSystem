import Option from "./options";
import Votation from "./votation";

export default class VotingApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  private showOptions(arrayOptions: Option[]): void {
    arrayOptions.forEach((option) => {
      console.log(`${option.Name} - ${option.TotalNumberOfVotes}`);
    });
  }

  showsVotations(): void {
    this.votations.forEach((votation) => {
      console.log(`\n${votation.PollQuestion}`);
      this.showOptions(votation.Options);
      console.log("#######");
      console.log();
    });
  }
}
