import Option from "./classes/options";
import VotingApp from "./classes/votingApp";
import Votation from "./classes/votation";

function addOptions(quantity: number, votationInstance: Votation): void {
  for (let i = 0; i < quantity; i++) {
    const option = new Option(`option ${i + 1}`, i + 1);
    votationInstance.addOption(option);
  }
}

const votation2 = new Votation("Qual sua cor favorita ?");
addOptions(4, votation2);

const option = new Option(`option 1`, 1);
votation2.addOption(option);
votation2.addOption(option);
votation2.addOption(option);

votation2.removeOption("option 1");

votation2.addVote(1);
votation2.addVote(1);
votation2.addVote(2);
votation2.addVote(3);
votation2.addVote(1);
votation2.addVote(1);
votation2.addVote(2);
votation2.addVote(3);
votation2.addVote(4);
votation2.addVote(4);
votation2.addVote(4);
votation2.addVote(4);

const votingApp = new VotingApp();

votingApp.addVotation(votation2);

votingApp.showsVotations();
