let questStage = 0;
const questSteps = [
    { text: "당신은 게임 개발자로서 첫 걸음을 내딛었습니다.", page: "about" },
    { text: "개발 중인 게임을 소개하세요!", page: "projects" },
    { text: "당신의 스킬을 정리해 보세요!", page: "skills" },
    { text: "팀원이 있다면 소개해 보세요!", page: "team" },
    { text: "퀘스트 완료! 이제 포트폴리오를 완성할 준비가 되었습니다.", page: "about" }
];

function startQuest() {
    questStage = 0;
    document.getElementById('quest-text').innerText = questSteps[questStage].text;
    showPage(questSteps[questStage].page);
}

function progressQuest() {
    if (questStage < questSteps.length - 1) {
        questStage++;
        document.getElementById('quest-text').innerText = questSteps[questStage].text;
        showPage(questSteps[questStage].page);
    }
}

function showPage(pageId) {
    document.querySelectorAll('.content').forEach(div => div.classList.add('d-none'));
    document.getElementById(pageId).classList.remove('d-none');
}
