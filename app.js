const questions = [
    {
        q: "네트워킹 행사: 프로젝트 성공 축하 파티나 대규모 업계 네트워킹 행사에 참여했을 때 나는?",
        a: "새로운 사람들과 명함을 주고받으며 내 영역과 인맥을 넓힐 기회로 삼는다.",
        b: "평소 친한 동료들 위주로 대화를 나누며 조용히 축하하고 에너지를 아낀다."
    },
    {
        q: "아이디어 기획: 중요한 업무 아이디어를 기획할 때 더 효율적이라고 느끼는 방식은?",
        a: "팀원들과 자유롭게 말하고 브레인스토밍하는 과정에서 아이디어를 구체화한다.",
        b: "혼자 조용히 생각정리와 자료 조사를 끝낸 뒤, 완성도 높은 기획안을 꺼내놓는다."
    },
    {
        q: "프로젝트 착수: 새로운 프로젝트를 맡게 되었을 때 내가 가장 먼저 확인하는 것은?",
        a: "기존에 성공했던 전례, 구체적인 매뉴얼, 당장 실행 가능한 데이터와 예산.",
        b: "이 프로젝트가 가진 장기적인 비전, 새로운 시도가 줄 수 있는 영향력과 확장성."
    },
    {
        q: "보고서 작성: 상사나 클라이언트에게 업무 보고서를 작성할 때 내가 가장 신경 쓰는 부분은?",
        a: "오탈자 없는 정확한 수치, 타임라인, 팩트 중심의 깔끔한 요약.",
        b: "전체적인 맥락과 스토리라인, 향후 발전 방향을 보여주는 매력적인 인사이트."
    },
    {
        q: "팀 내 갈등 상황: 팀원 간의 의견 충돌로 프로젝트 진행이 지연될 때 내가 취하는 행동은?",
        a: "감정을 배제하고, 어떤 선택이 회사와 프로젝트에 이성적이고 이득이 되는지 기준을 세워 조율한다.",
        b: "갈등으로 지친 팀원들의 마음을 먼저 살피고, 모두가 동의하고 편안해할 수 있는 절충안을 찾는다."
    },
    {
        q: "피드백 스타일: 동료에게 피드백을 주거나 받을 때 내가 더 중요하게 생각하는 가치는?",
        a: "조금 뼈아프더라도 실질적인 성장을 위해 개선해야 할 점을 명확하고 솔직하게 지적하는 것.",
        b: "고생한 과정을 인정해 주고, 긍정적인 응원과 함께 부드러운 어조로 대안을 제안하는 것."
    },
    {
        q: "주간 업무 시작: 월요일 아침, 이번 주 업무를 시작하는 나의 책상 위 상태는?",
        a: "요일별, 시간별로 해야 할 일(To-do list)이 캘린더나 플래너에 체계적으로 정리되어 있다.",
        b: "굵직한 목표만 머릿속에 두고, 출근 후 가장 급하거나 흥미가 생기는 일부터 유연하게 시작한다."
    },
    {
        q: "갑작스러운 변경: 예상치 못한 트렌드 변화나 갑작스러운 업무 수정 요청이 들어왔을 때 나의 심리는?",
        a: "기존 계획이 틀어져 스트레스를 받으며, 리스크를 최소화하기 위해 빠르게 계획을 전면 수정한다.",
        b: "새로운 상황에 유연하게 대처하며, 그때그때 임기응변을 발휘해 상황에 맞춰간다."
    },
    {
        q: "최고의 직장 기준: 내가 생각하는 '가장 일하고 싶은 최고의 직장'의 기준은?",
        a: "명확한 보상 체계가 있고, 내 능력과 성과를 객관적으로 평가받아 확실하게 성장할 수 있는 곳.",
        b: "서로 존중하고 지지하는 분위기에서, 내 가치관과 라이프스타일을 존중받으며 일할 수 있는 곳."
    },
    {
        q: "리더십 스타일: 프로젝트 리더를 맡았을 때 내가 발휘하는 리더십 스타일은?",
        a: "명확한 목표를 제시하고 타임라인을 제어하며, 팀원들을 주도적으로 이끌어가는 가이드형 리더.",
        b: "팀원 개개인의 강점을 파악해 서포트해 주고, 경청을 통해 잠재력을 끌어내는 조력자형 리더."
    },
    {
        q: "보상과 휴식: 장기 프로젝트를 끝낸 직후, 주말을 앞둔 금요일 퇴근길에 내가 원하는 보상은?",
        a: "고생한 팀원들과 맛있는 음식을 먹고 마시며 수다로 스트레스를 푸는 것.",
        b: "집으로 바로 퇴근해 휴대폰을 끄고 맛있는 걸 먹으며 온전히 혼자 쉬는 것."
    },
    {
        q: "역할 선호: 사내 공모전이나 중요한 TF(태스크포스) 팀을 구성할 때 내가 선호하는 역할은?",
        a: "팀원들 간의 소통을 주도하고 외부 부서와 조율하는 전면적인 역할.",
        b: "묵묵히 내게 맡겨진 파트를 완벽하게 분석하고 결과물로 증명하는 실무적 역할."
    },
    {
        q: "역량 개발: 회사에서 업무 관련 역량 개발을 위해 세미나나 교육을 지원해 준다고 할 때 내 선택은?",
        a: "실무에 당장 적용해 효율을 높일 수 있는 구체적인 스킬이나 툴(Tool) 사용법 교육.",
        b: "업계의 미래 트렌드, 신사업 인사이트, 혹은 거시적인 브랜딩 전략 세미나."
    },
    {
        q: "미팅 준비: 새로운 클라이언트와의 미팅을 준비할 때 내가 더 공을 들이는 단계는?",
        a: "클라이언트 회사의 과거 이력, 기존 계약 조건, 요구사항 명세서 분석하기.",
        b: "클라이언트가 생각지도 못한 파격적이고 매력적인 콘셉트와 제안 아이디어 구상하기."
    },
    {
        q: "상사 선호: 팀원으로서 내가 가장 따르고 싶고 존경심이 드는 상사의 유형은?",
        a: "감정 기복 없이 일처리가 완벽하며, 공과 사를 명확히 구분해 주는 유능한 상사.",
        b: "팀원의 고충을 귀담아듣고 공감해 주며, 심리적 안정감을 주는 따뜻한 상사."
    },
    {
        q: "피드백 수용: 오랜 시간 공들인 기획안이 상사의 한마디에 반려되었을 때, 내 머릿속에 먼저 드는 생각은?",
        a: "'어떤 부분이 논리적으로 부족했지?'라며 지적받은 팩트와 수정 방향을 바쁘게 검토한다.",
        b: "'내 노력이 인정받지 못했나?' 하는 아쉬움과 씁쓸함이 먼저 밀려와 마음을 추스려야 한다."
    },
    {
        q: "업무 환경: 출근해서 자리에 앉았을 때, 내가 가장 안정감을 느끼는 업무 환경은?",
        a: "오늘 끝내야 할 일의 순서와 우선순위가 명확하게 정해져 있는 상태.",
        b: "고정된 틀 없이, 상황에 따라 유연하게 내 페이스대로 업무 조율할 수 있는 상태."
    },
    {
        q: "마감 관리: 마감 기한이 2주 남은 중요한 대형 과제가 주어졌을 때 나의 일처리 스타일은?",
        a: "매일 일정한 분량을 나누어 계획적으로 진행하며, 마감 2~3일 전에 미리 끝내둔다.",
        b: "초반에는 아이디어를 수집하며 여유를 부리다가, 마감이 임박했을 때 무서운 집중력으로 끝낸다."
    },
    {
        q: "이직 고민: 이직을 고민할 때, 연봉 외에 나를 가장 흔들리게 만드는 결정적인 요소는?",
        a: "이 회사가 가진 네임밸류(시장 인지도)와 내가 더 높은 직급으로 올라갈 수 있는 성장 가능성.",
        b: "유연근무제, 재택근무 등 워라밸 보장 여부와 수평적이고 자유로운 조직 문화."
    },
    {
        q: "커리어 정체성: 내가 직장에서 궁극적으로 인정받고 싶은 '나의 커리어 정체성'은?",
        a: "대안이 없는 독보적인 실력과 정확성으로 조직 내에서 '대체 불가능한 전문가'.",
        b: "긍정적인 영향력을 미치고 새로운 문화를 만들어가는 '영감과 혁신의 아이콘'."
    }
];

const mbtiResults = {
    "INTJ": {
        title: "단호한 커리어 설계자",
        weapon: "철저한 데이터 분석력과 장기적 로드맵 구축 능력",
        desc: [
            "숲과 나무를 동시에 보는 완벽주의자입니다.",
            "감정보다는 논리와 데이터에 기반한 의사결정을 선호합니다.",
            "스스로 세운 높은 기준을 충족하기 위해 끊임없이 성장합니다.",
            "효율적이지 못한 시스템을 보면 참지 못하고 개선안을 제시합니다."
        ],
        good: { type: "ENTP", title: "게임 체인저" },
        bad: { type: "ESFJ", title: "사내 네트워킹의 중심" }
    },
    "INTP": {
        title: "냉철한 시스템 분석가",
        weapon: "복잡한 문제를 단숨에 해체하는 논리적 솔루션",
        desc: [
            "업무의 본질을 파악하고 창의적인 해결책을 찾는 데 특화되어 있습니다.",
            "자율성이 보장된 환경에서 최고의 퍼포먼스를 냅니다.",
            "불필요한 미팅이나 보고 체계보다는 실질적인 결과물에 집중합니다.",
            "새로운 지식과 툴을 빠르게 습득하여 업무에 적용합니다."
        ],
        good: { type: "ENTJ", title: "제너럴 CEO" },
        bad: { type: "ISFJ", title: "오피스의 든든한 가디언" }
    },
    "ENTJ": {
        title: "조직을 이끄는 제너럴 CEO",
        weapon: "거침없는 추진력과 효율 중심의 목표 달성력",
        desc: [
            "목표가 정해지면 망설임 없이 실행으로 옮기는 불도저입니다.",
            "팀원들을 리드하고 적재적소에 배치하는 탁월한 용인술을 가졌습니다.",
            "리스크를 두려워하지 않고, 오히려 성장의 기회로 삼습니다.",
            "명확한 비전 제시와 카리스마로 주변을 압도합니다."
        ],
        good: { type: "INTP", title: "시스템 분석가" },
        bad: { type: "ISFP", title: "감각적인 비주얼리스트" }
    },
    "ENTP": {
        title: "판을 흔드는 게임 체인저",
        weapon: "위기를 기회로 바꾸는 임기응변과 혁신적 기획력",
        desc: [
            "기존의 틀을 깨는 참신한 아이디어 뱅크입니다.",
            "위기 상황일수록 두뇌 회전이 빨라지며 돌파구를 찾아냅니다.",
            "단조로운 반복 업무보다는 도전적이고 역동적인 프로젝트를 즐깁니다.",
            "뛰어난 언변과 협상력으로 클라이언트를 매료시킵니다."
        ],
        good: { type: "INTJ", title: "커리어 설계자" },
        bad: { type: "ISFJ", title: "오피스의 든든한 가디언" }
    },
    "INFJ": {
        title: "조용한 커리어 멘토",
        weapon: "조직의 핵심을 꿰뚫는 통찰력과 깊이 있는 공감대",
        desc: [
            "팀원들의 숨겨진 잠재력을 발견하고 끌어올려주는 조력자입니다.",
            "단기적인 성과보다는 조직의 장기적인 비전과 가치를 중시합니다.",
            "말없이 묵묵하게 팀의 중심을 잡아주는 정신적 지주 역할을 합니다.",
            "완벽한 결과물을 위해 보이지 않는 곳에서 치열하게 고민합니다."
        ],
        good: { type: "ENFP", title: "인간 비타민 마케터" },
        bad: { type: "ESTP", title: "현장 돌파 행동대장" }
    },
    "INFP": {
        title: "가치를 좇는 크리에이터",
        weapon: "뚜렷한 주관과 진정성 있는 스토리텔링 능력",
        desc: [
            "자신의 신념과 일치하는 업무에서 폭발적인 에너지를 발휘합니다.",
            "사람들의 마음을 움직이는 감성적이고 섬세한 기획에 능합니다.",
            "틀에 얽매이지 않는 자유로운 업무 환경을 선호합니다.",
            "갈등을 지양하고 팀 내의 평화와 조화를 중요하게 생각합니다."
        ],
        good: { type: "ENFJ", title: "따뜻한 성장 파트너" },
        bad: { type: "ESTJ", title: "효율의 마스터" }
    },
    "ENFJ": {
        title: "조직의 따뜻한 성장 파트너",
        weapon: "팀원들의 잠재력을 끌어내는 탁월한 동기부여 능력",
        desc: [
            "뛰어난 공감 능력으로 팀의 사기를 높여주는 타고난 리더입니다.",
            "나 혼자만의 성공보다는 '우리 모두의 동반 성장'을 목표로 합니다.",
            "원활한 커뮤니케이션으로 부서 간의 의견을 매끄럽게 조율합니다.",
            "따뜻하지만 필요할 때는 단호하게 방향성을 제시합니다."
        ],
        good: { type: "INFP", title: "가치를 좇는 크리에이터" },
        bad: { type: "ISTP", title: "위기 탈출 기술자" }
    },
    "ENFP": {
        title: "인간 비타민 마케터",
        weapon: "지치지 않는 에너지와 트렌드를 선도하는 기획력",
        desc: [
            "호기심이 많아 최신 트렌드를 누구보다 빠르게 파악하고 적용합니다.",
            "사교적인 성격으로 누구와도 금방 친해지며 분위기 메이커 역할을 합니다.",
            "번뜩이는 아이디어와 열정으로 프로젝트의 초기 동력을 제공합니다.",
            "루틴한 업무보다는 매일 새로운 자극이 있는 환경을 즐깁니다."
        ],
        good: { type: "INFJ", title: "조용한 커리어 멘토" },
        bad: { type: "ISTJ", title: "완벽 가이드북" }
    },
    "ISTJ": {
        title: "걸어 다니는 완벽 가이드북",
        weapon: "빈틈없는 일정 관리와 흐트러짐 없는 책임감",
        desc: [
            "한 번 맡은 일은 끝까지 완벽하게 처리해내는 신뢰의 아이콘입니다.",
            "체계적인 프로세스와 데이터 정리에 있어 타의 추종을 불허합니다.",
            "모호한 지시보다는 명확한 가이드라인과 매뉴얼을 선호합니다.",
            "작은 디테일도 놓치지 않는 꼼꼼함으로 실수를 미연에 방지합니다."
        ],
        good: { type: "ESFP", title: "분위기 메이커" },
        bad: { type: "ENFP", title: "인간 비타민 마케터" }
    },
    "ISFJ": {
        title: "오피스의 든든한 가디언",
        weapon: "동료들을 세심하게 챙기는 서포트력과 성실함",
        desc: [
            "조직이 원활하게 돌아가도록 묵묵히 지원하는 숨은 공로자입니다.",
            "동료들의 상태를 세심하게 살피고 배려하는 따뜻함을 지녔습니다.",
            "예측 가능하고 안정적인 업무 환경에서 높은 집중력을 보입니다.",
            "책임감이 강하며, 남들이 꺼리는 궂은일도 마다하지 않습니다."
        ],
        good: { type: "ESTP", title: "현장 돌파 행동대장" },
        bad: { type: "ENTP", title: "게임 체인저" }
    },
    "ESTJ": {
        title: "에러 제로, 효율의 마스터",
        weapon: "자원을 최적화하여 결과물로 증명하는 실행력",
        desc: [
            "철저한 계획과 강력한 추진력으로 프로젝트를 성공으로 이끕니다.",
            "객관적인 사실과 결과물을 기준으로 공정하게 평가합니다.",
            "비효율적인 프로세스를 과감하게 개편하고 시스템을 구축합니다.",
            "현실적이고 실용적인 접근으로 문제를 가장 빠르게 해결합니다."
        ],
        good: { type: "INFP", title: "가치를 좇는 크리에이터" },
        bad: { type: "ISFP", title: "감각적인 비주얼리스트" }
    },
    "ESFJ": {
        title: "사내 네트워킹의 중심",
        weapon: "조직 내 협업을 이끄는 탁월한 친화력과 소통력",
        desc: [
            "타고난 사교성으로 폭넓은 사내외 인적 네트워크를 자랑합니다.",
            "팀원들의 화합과 긍정적인 근무 환경 조성을 중요하게 여깁니다.",
            "상대방의 니즈를 빠르게 파악하고 맞춤형 솔루션을 제안합니다.",
            "규칙과 규범을 존수하며 조직의 문화를 안정적으로 유지합니다."
        ],
        good: { type: "ISFP", title: "감각적인 비주얼리스트" },
        bad: { type: "INTP", title: "시스템 분석가" }
    },
    "ISTP": {
        title: "위기 탈출 기술자",
        weapon: "과몰입 없는 냉정함과 실용적인 문제 해결력",
        desc: [
            "예상치 못한 돌발 상황에서도 당황하지 않고 침착하게 대응합니다.",
            "장황한 설명보다는 핵심만 짚어내는 효율적인 커뮤니케이션을 선호합니다.",
            "도구와 시스템을 다루는 능력이 뛰어나며 실무 감각이 탁월합니다.",
            "상황에 따라 유연하게 대처하는 임기응변 능력이 뛰어납니다."
        ],
        good: { type: "ESTJ", title: "효율의 마스터" },
        bad: { type: "ENFJ", title: "따뜻한 성장 파트너" }
    },
    "ISFP": {
        title: "감각적인 비주얼리스트",
        weapon: "유연한 적응력과 미적·감성적 디테일 완성도",
        desc: [
            "남다른 미적 감각과 섬세함으로 결과물의 퀄리티를 한 단계 높입니다.",
            "경직된 분위기보다는 자율적이고 유연한 문화를 선호합니다.",
            "조용하지만 상황의 흐름을 정확하게 읽어내고 맞춰갑니다.",
            "현재의 순간을 즐기며 긍정적이고 여유로운 태도를 유지합니다."
        ],
        good: { type: "ESFJ", title: "사내 네트워킹의 중심" },
        bad: { type: "ENTJ", title: "제너럴 CEO" }
    },
    "ESTP": {
        title: "현장 돌파 행동대장",
        weapon: "리스크를 두려워하지 않는 과감한 실전 돌파력",
        desc: [
            "책상에 앉아 고민하기보다 직접 부딪혀보며 실마리를 찾습니다.",
            "특유의 에너지와 순발력으로 협상과 설득에 강한 면모를 보입니다.",
            "틀에 박힌 규정보다는 융통성 있게 목표를 달성하는 것을 선호합니다.",
            "자유분방하고 다이나믹한 환경에서 일할 때 가장 빛납니다."
        ],
        good: { type: "ISFJ", title: "든든한 가디언" },
        bad: { type: "INFJ", title: "조용한 커리어 멘토" }
    },
    "ESFP": {
        title: "오피스 분위기 메이커",
        weapon: "어떤 조직이든 빠르게 녹아드는 적응력과 긍정성",
        desc: [
            "밝고 유쾌한 에너지로 팀 내에 활력을 불어넣는 비타민 같은 존재입니다.",
            "사람들과 함께 어울려 일할 때 아이디어와 시너지가 폭발합니다.",
            "주변 상황에 대한 관찰력이 뛰어나 센스 있다는 평가를 자주 받습니다.",
            "새로운 시도를 즐기며 실패 앞에서도 빠르게 훌털고 일어납니다."
        ],
        good: { type: "ISTJ", title: "완벽 가이드북" },
        bad: { type: "INTJ", title: "단호한 커리어 설계자" }
    }
};

// State
let currentStep = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let userAnswers = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const optionABtn = document.getElementById('option-a');
const optionBBtn = document.getElementById('option-b');
const shareBtn = document.getElementById('share-btn');
const retryBtn = document.getElementById('retry-btn');
const toastMsg = document.getElementById('toast-msg');

const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const questionBadge = document.getElementById('question-badge');
const questionTitle = document.getElementById('question-title');
const optionAText = document.getElementById('opt-a-text');
const optionBText = document.getElementById('opt-b-text');

// Init
startBtn.addEventListener('click', startTest);
optionABtn.addEventListener('click', () => handleAnswer('A'));
optionBBtn.addEventListener('click', () => handleAnswer('B'));
shareBtn.addEventListener('click', copyLink);
retryBtn.addEventListener('click', resetTest);

function switchScreen(from, to) {
    from.classList.remove('active');
    from.classList.add('hidden');
    to.classList.remove('hidden');
    to.classList.add('active');
}

function startTest() {
    switchScreen(startScreen, questionScreen);
    currentStep = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    userAnswers = [];
    renderQuestion();
}

function renderQuestion() {
    const qData = questions[currentStep];
    
    // Animation reset
    questionTitle.parentElement.classList.remove('slide-in');
    void questionTitle.parentElement.offsetWidth; // trigger reflow
    questionTitle.parentElement.classList.add('slide-in');

    questionBadge.textContent = `Q${currentStep + 1}`;
    
    // Parse question title (split by ":") to make it look nicer if needed
    const parts = qData.q.split(':');
    if (parts.length > 1) {
        questionTitle.innerHTML = `<span style="color:var(--accent); font-size:1.1rem; display:block; margin-bottom:8px;">${parts[0]}</span>${parts[1]}`;
    } else {
        questionTitle.textContent = qData.q;
    }

    optionAText.textContent = qData.a;
    optionBText.textContent = qData.b;

    // Update Progress
    const percent = ((currentStep + 1) / questions.length) * 100;
    progressFill.style.width = `${percent}%`;
    progressText.textContent = `${currentStep + 1} / 20`;
}

const scoringMap = [
    { A: ['E'], B: ['I'] }, // 1
    { A: ['E'], B: ['I'] }, // 2
    { A: ['S'], B: ['N'] }, // 3
    { A: ['S'], B: ['N'] }, // 4
    { A: ['T'], B: ['F'] }, // 5
    { A: ['T'], B: ['F'] }, // 6
    { A: ['J'], B: ['P'] }, // 7
    { A: ['J'], B: ['P'] }, // 8
    { A: ['T'], B: ['F'] }, // 9
    { A: ['J'], B: ['P'] }, // 10
    { A: ['E'], B: ['I'] }, // 11
    { A: ['E'], B: ['I'] }, // 12
    { A: ['S'], B: ['N'] }, // 13
    { A: ['S'], B: ['N'] }, // 14
    { A: ['T'], B: ['F'] }, // 15
    { A: ['T'], B: ['F'] }, // 16
    { A: ['J'], B: ['P'] }, // 17
    { A: ['J'], B: ['P'] }, // 18
    { A: ['T', 'J'], B: ['F', 'P'] }, // 19
    { A: ['S', 'T'], B: ['N', 'F'] }  // 20
];

function handleAnswer(choice) {
    userAnswers.push(choice);
    
    // Scoring logic
    const traits = scoringMap[currentStep][choice];
    traits.forEach(t => scores[t] += 1);

    currentStep++;

    if (currentStep < questions.length) {
        renderQuestion();
    } else {
        showLoading();
    }
}

function showLoading() {
    switchScreen(questionScreen, loadingScreen);
    
    // Simulate API/Analysis time
    setTimeout(() => {
        calculateResult();
        switchScreen(loadingScreen, resultScreen);
    }, 2500);
}

function calculateResult() {
    let finalMBTI = "";
    finalMBTI += (scores.E >= scores.I) ? "E" : "I";
    finalMBTI += (scores.S >= scores.N) ? "S" : "N";
    finalMBTI += (scores.T >= scores.F) ? "T" : "F";
    finalMBTI += (scores.J >= scores.P) ? "J" : "P";

    saveResultToServer(finalMBTI, userAnswers);

    renderResult(finalMBTI);
}

function saveResultToServer(mbti, answers) {
    fetch('http://localhost:5000/api/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mbti, answers })
    })
    .then(response => response.json())
    .then(data => console.log('Save result:', data))
    .catch(error => console.error('Error saving result:', error));
}

function renderResult(mbti) {
    const data = mbtiResults[mbti];
    
    // Set character image
    const mbtiLower = mbti.toLowerCase();
    document.getElementById('result-character-img').src = `images/character_${mbtiLower}.png`;
    
    document.getElementById('mbti-type').textContent = mbti;
    document.getElementById('result-title').textContent = data.title;
    document.getElementById('result-weapon').textContent = data.weapon;
    
    const descList = document.getElementById('result-desc-list');
    descList.innerHTML = '';
    data.desc.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        descList.appendChild(li);
    });

    document.getElementById('chem-good-type').textContent = data.good.type;
    document.getElementById('chem-good-title').textContent = data.good.title;
    
    document.getElementById('chem-bad-type').textContent = data.bad.type;
    document.getElementById('chem-bad-title').textContent = data.bad.title;
}

function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        toastMsg.classList.remove('hidden');
        setTimeout(() => {
            toastMsg.classList.add('hidden');
        }, 2000);
    });
}

function resetTest() {
    switchScreen(resultScreen, startScreen);
    // Remove hash if any
    history.pushState("", document.title, window.location.pathname + window.location.search);
}
