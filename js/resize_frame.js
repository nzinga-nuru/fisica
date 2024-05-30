// resize_iframe.js
function resizeIframe(iframe, height) {
    iframe.style.height = height + 'px';
}

window.addEventListener('message', function(event) {
    if (event.data.type === 'resize') {
        var iframe = document.getElementById(event.data.id);
        resizeIframe(iframe, event.data.height);
    }
});
