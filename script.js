const projects = document.querySelectorAll('.project');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

function updateCarousel() {
    projects.forEach((project, index) => {
        project.classList.remove('active', 'blurred');

        if (index === currentIndex) {
            project.classList.add('active');
        } else {
            project.classList.add('blurred');
        }
    });
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});