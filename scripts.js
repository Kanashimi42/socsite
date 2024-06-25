function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('visible');
        } else {
            page.classList.remove('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});
