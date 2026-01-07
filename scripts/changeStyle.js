// Variable pour suivre le style actuel
let currentStyle = 1;

function changeStyle() {
    const linkElement = document.getElementById('theme-style');
    const timestamp = new Date().getTime(); // Pour éviter le cache

    if (currentStyle === 1) {
        linkElement.href = 'style/style2.css?t=' + timestamp; // Change vers style2.css
        currentStyle = 2;
    } else {
        linkElement.href = 'style/style1.css?t=' + timestamp; // Change vers style1.css
        currentStyle = 1;
        
    }
}
