/**
 * Function exploits media queries 
 * to detect fullscreen state of a window.
 **/
function isFullscreen() {
    const rand = Math.random() * 1e8 | 0;
    const cls = 'c_' + rand;

    const styles = `
        .${ cls } { 
            display: block; 
        }
        @media all and (display-mode: fullscreen) {
            .${ cls } { 
                display: none; 
            }
        }
        `;
    const stylesheet = document.createElement('style');
    stylesheet.type = 'text/css';
    stylesheet.innerText = styles;

    const d = document.createElement('div');
    d.className = cls;
    
    document.head.appendChild(stylesheet);
    document.body.appendChild(d);

    const display = window.getComputedStyle(d).display;
    const result = 'none' === display;

    document.body.removeChild(d);
    document.head.removeChild(stylesheet);

    return result;
}