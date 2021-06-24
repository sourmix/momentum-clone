const quotes = [
    {
        quote: "할 일을 미루는 것은 어제를 따라가는 것이다",
        author: "돈 마퀴스",
    },
    {
        quote: "변화를 두려워하는 사람이 가장 불행한 사람이다",
        author: "미뇽 맥러플린",
    },
    {
        quote: "위대한 이들은 목적을 가지고, 그 외의 사람들은 소원을 갖는다",
        author: "워싱턴 어빙",
    },
    {
        quote: "평범한 일을 평범하지 않은 방식으로 할 때 세상 사람들에게 주목 받을 것이다",
        author: "조지 워싱턴 커버",
    },
    {
        quote: "나태가 매력적인 것으로 보이지만, 만족을 주는 것은 일이다",
        author: "앤 프랭크",
    },
    {
        quote: "얼굴이 지속적으로 햇빛을 향해 있다면 그림자는 보이지 않는다",
        author: "헬렌 켈러",
    },
    {
        quote: "계획 없는 목표는 한낱 꿈에 불과하다",
        author: "생텍쥐페리",
    },
    {
        quote: "어떤 생각에 동의하지 않고도 그 생각을 해볼 수 있는 것이 교육 받은 사람의 특징이다",
        author: "아리스토텔레스",
    },
    {
        quote: "정의의 칼에는 칼집이 없다",
        author: "앙트완 드 리베랄",
    },
    {
        quote: "비관론자는 모든 기회에서 어려움을 찾아내고 낙관론자는 모든 어려움에서 기회를 찾아낸다",
        author: "윈스턴 처칠",
    }
]
const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;