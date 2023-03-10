fetch("teams.json")
  .then((r) => r.json())
  .then((teams) => {
    displayTeams(teams);
  });
function displayTeams(teams) {
  const teamsHTML = teams.map(
    (team) =>
      `<tr>
      <td>${team.promotion}</td>
      <td>${team.members}</td>
      <td>${team.name}Teams Networking</td>
      <td>${team.url}</td>
    </tr>`
  );
  document.querySelector("#teams tbody").innerHTML = teamsHTML.join("");
}
