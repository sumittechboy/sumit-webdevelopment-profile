// Toggle switches for Day 8 CSS
document.addEventListener('DOMContentLoaded', function() {
    // Toggle external CSS (CSSday8.css)
    const cssToggleExt = document.getElementById('cssToggleExt');
    if (cssToggleExt) {
        cssToggleExt.addEventListener('change', function() {
            const extCss = document.getElementById('extCssDay8');
            if (!cssToggleExt.checked) {
                if (extCss) extCss.disabled = true;
            } else {
                if (extCss) extCss.disabled = false;
            }
        });
    }

//     // Toggle internal CSS (<style> in <head>)
//     const cssToggleInt = document.getElementById('cssToggleInt');
//     if (cssToggleInt) {
//         cssToggleInt.addEventListener('change', function() {
//             const intCss = document.querySelector('head style');
//             if (!cssToggleInt.checked) {
//                 if (intCss) intCss.disabled = true;
//             } else {
//                 if (intCss) intCss.disabled = false;
//             }
//         });
//     }
});