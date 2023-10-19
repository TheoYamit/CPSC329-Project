document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const teamSection = document.getElementById('team-section');

    window.addEventListener('scroll', () => {
        const rect = banner.getBoundingClientRect();

        /* Trying to get it when the banner is halfway out of the screen?*/
        const bannerHalfHeight = (banner.offsetHeight / 2) + 200;

        if (rect.bottom <= bannerHalfHeight) {
            teamSection.style.opacity = '1';
        } else {
            teamSection.style.opacity = '0';
        }
    });
});
