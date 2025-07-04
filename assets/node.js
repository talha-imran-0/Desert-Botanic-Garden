// Select language 
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    const flagImg = document.getElementById('flag-img');

    if (languageSelect && flagImg) {
        languageSelect.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            const imgSrc = selectedOption.getAttribute('data-img');
            console.log('Selected language:', selectedOption.value);
            console.log('Image source:', imgSrc);
            if (imgSrc) {
                flagImg.src = imgSrc;
            } else {
                console.error('Image source not found for selected option');
            }
        });
    } else {
        console.error('Element not found:', !languageSelect ? 'language-select' : 'flag-img');
    }
});

// Open Link for Section 5 

document.getElementById('supportPg').addEventListener('click', function() {
    const link = document.querySelector('.child___support-pg___btn a');
    if (link) {
        window.location.href = link.href;
        console.log(link);
    }
});