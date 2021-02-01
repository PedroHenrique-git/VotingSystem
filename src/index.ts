import Option from "./classes/options";
import VotingApp from "./classes/votingApp";
import Votation from "./classes/votation";

const form = document.querySelector("form") as HTMLFormElement;
const addOptionBtn = document.querySelector(".add-option") as HTMLLinkElement;
const options: Option[] = [];

const addVotingInHtml = (votingApp: VotingApp): void => {
  const votingInHtml = votingApp.Votations.map((votation) => {
    const votationDiv = document.createElement("div");

    votationDiv.classList.add("votation-card");
    votationDiv.innerHTML = `<h2>${votation.PollQuestion}</h2>`;

    votation.Options.forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("option");

      const p1 = document.createElement("p");
      p1.innerHTML = `<p>${option.Name}</p>`;

      const p2 = document.createElement("p");
      p2.innerHTML = `
        <p>
          Total votes: <span id=${option.NumberToVote} class="total-votes">${option.TotalNumberOfVotes}</span>
        </p>
      `;

      const btn = document.createElement("button");
      btn.innerText = "Vote";
      btn.classList.add("vote-button");

      // not ideal
      btn.addEventListener("click", () => {
        addVote(option.NumberToVote, votation, option);
      });

      optionDiv.appendChild(p1);
      optionDiv.appendChild(p2);
      optionDiv.appendChild(btn);

      votationDiv.appendChild(optionDiv);
    });

    return votationDiv;
  });

  const addVote = (
    voteNumber: number,
    votationInstance: Votation,
    option: Option,
  ): void => {
    votationInstance.addVote(voteNumber);
    const totalVotes = document.getElementById(
      `${option.NumberToVote}`,
    ) as HTMLSpanElement;
    totalVotes.innerText = String(option.TotalNumberOfVotes);
  };

  votingInHtml.forEach((div) => {
    document.querySelector(".list-votings")?.appendChild(div);
  });
};

addOptionBtn.addEventListener("click", function () {
  const optionName = form.querySelector("#option") as HTMLInputElement;
  const optionNumber = form.querySelector("#numberOption") as HTMLInputElement;
  options.push(new Option(optionName.value, Number(optionNumber.value)));

  const element = `<span>
    ${optionName.value} - ${optionNumber.value}
    <button class="remove-option" nameOption=${optionName.value}>Remove</button>
  </span>`;
  this.parentElement?.insertAdjacentHTML("afterend", element);
});

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const pollQuestion = document.querySelector("#poll") as HTMLInputElement;

  if (options.length > 0 && pollQuestion.value !== "") {
    try {
      const votation = new Votation(pollQuestion.value);
      options.forEach((option) => votation.addOption(option));
      const votingApp = new VotingApp();
      votingApp.addVotation(votation);
      addVotingInHtml(votingApp);
    } catch (e) {
      alert(e.message);
    }
  } else {
    return;
  }
});

document
  .querySelector(".remove-option")
  ?.addEventListener("click", function () {
    alert("teste");
  });
