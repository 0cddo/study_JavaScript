const members = [
  "태연",
  "서현",
  "유리",
  "로제",
  "제니",
  "준수",
  "준호",
  "우영",
  "택연",
  "닉쿤",
  "온유",
  "태민",
  "기범",
  "종현",
  "민호",
  "닝닝",
  "윈터",
  "지젤",
  "보아",
  "웬디",
];

// 팀 배정 대기 창
function showNotAssigneds() {
  let membersString = "";
  for (let i = 0; i < members.length; i++) {
    membersString += members[i];
    if (i < members.length - 1) membersString += ", ";
  }
  document.querySelector("#not_assigned").innerHTML = membersString;
}

window.addEventListener("load", showNotAssigneds);

// 팀원 팀으로 이동하기
function assignMemberToTeam(teamNum) {
  if (members.length === 0) return;
  let firstMember = members[0];
  firstMember = members.splice(0, 1);
  showNotAssigneds();

  let liEl = document.createElement("li");
  liEl.append(firstMember);
  document.querySelector("#team_" + teamNum).append(liEl);
}

// 팀 배정 버튼 연결
const button = document.querySelectorAll("button");

button.forEach((oneBtn, index) => {
  oneBtn.addEventListener("click", () => {
    assignMemberToTeam(index + 1);
  });
});
