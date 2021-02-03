import Option from "./options";
import Votation from "./votation";

export default class VotingApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  get Votations(): Votation[] {
    return this.votations;
  }
}
