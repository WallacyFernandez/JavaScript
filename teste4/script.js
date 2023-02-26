// Adiciona uma classe "ativo" no item de menu correspondente à seção visível na tela
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');
    const currentSection = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - section.offsetHeight * 0.25) - 1;

    navItems.forEach((navItem) => {
        navItem.classList.remove('ativo');
    });

    navItems[currentSection].classList.add('ativo');
});
