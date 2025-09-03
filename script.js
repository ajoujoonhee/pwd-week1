function changeText() {
    const intro = document.getElementById('introText');
    const messages = [
        '작게 시작하되, 끝까지 가는 습관을 만듭니다.',
      'Design → Build → Iterate. 계속 개선하는 사람이 되기!',
      '알고리즘은 매일, UI는 깔끔하게. 균형 있게 성장하기.',
      '오류 로그는 나의 스승. 디버깅을 사랑하자.',
      '작업 자동화로 시간을 벌고, 그 시간으로 더 배우기.'
    ];
    intro.textContent = messages[Math.floor(Math.random() * messages.length)];
}

// 페이지 로드 시 환영 메시지
window.addEventListener('load', () => {
    console.log('웹사이트가 성공적으로 로드되었습니다!');
});

document.getElementById('randomize')?.addEventListener('click', (e) => {
    e.preventDefault();
    changeText();
});