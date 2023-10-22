document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const motivationSection = document.getElementById('motivation-section');

    window.addEventListener('scroll', () => {
        const rect = banner.getBoundingClientRect();

        /* Trying to get it when the banner is halfway out of the screen?*/
        const bannerHalfHeight = (banner.offsetHeight / 2) + 200;

        if (rect.bottom <= bannerHalfHeight) {
            motivationSection.style.opacity = '1';
            motivationSection.classList.add('bounce-animation');
        } else {
            motivationSection.style.opacity = '0';
            motivationSection.classList.remove('bounce-animation');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const motivationSection = document.getElementById('motivation-section');
    const teamSection = document.getElementById('team-section');

    window.addEventListener('scroll', () => {
        const rect = motivationSection.getBoundingClientRect();

        /* Trying to get it when the banner is halfway out of the screen?*/
        const motivationHalfHeight = (motivationSection.offsetHeight / 2) + 200;

        if (rect.bottom <= motivationHalfHeight) {
            teamSection.style.opacity = '1';
        } else {
            teamSection.style.opacity = '0';
        }
    });
});
