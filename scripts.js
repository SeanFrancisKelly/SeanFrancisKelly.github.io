
document.addEventListener('DOMContentLoaded', function () {
    const backgroundText = document.querySelector('.background-text');
    for (let i = 0; i < 50; i++) {
        let line = document.createElement('div');
        line.classList.add('background-line');
        line.textContent = 'Portfolio Coming Soon '.repeat(20); // Repeat the phrase to fill the line
        line.style.top = `${i * 2}%`; // Adjust the spacing between lines
        line.style.animationName = i % 2 === 0 ? 'scroll-right' : 'scroll-left'; // Alternate the animation
        backgroundText.appendChild(line);
    }
});
