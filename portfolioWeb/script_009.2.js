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

//  멤버 보이기
function showAllMember() {
  let allMember = "";
  for (let i = 0; i < members.length; i++) {
    allMember += members[i];
    if (i < members.length - 1) allMember += ", ";
  }
  document.querySelector("#not_assigned").innerHTML = allMember;
}

window.addEventListener("load", showAllMember);

// 각 멤버 팀으로 배정
function memberToTeam(teamNum) {
  if (members.length === 0) return;
  let firstMember = members[0];
  firstMember = members.splice(0, 1);
  showAllMember();

  let liEl = document.createElement("li");
  liEl.append(firstMember);
  document.querySelector("#team_" + teamNum).append(liEl);
}
// 멤버 배정 클릭 버튼 연결
const button = document.querySelectorAll("button");
button.forEach((oneBtn, index) => {
  oneBtn.addEventListener("click", () => {
    memberToTeam(index + 1);
  });
});
