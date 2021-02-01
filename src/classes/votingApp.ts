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

  get Votations(): Votation[] {
    return this.votations;
  }
}
