function removeBar() {
    const bar = document.querySelector('#danger-bar');
    if (bar) {
        bar.parentNode.removeChild(bar);
    }
}

function showBar() {
    const bar = document.createElement('div');
    bar.id = 'danger-bar';
    bar.style.backgroundColor = 'red';
    bar.style.height = '5rem';
    bar.style.color = 'white';
    bar.style.display = 'flex';
    bar.style.alignItems = 'center';
    bar.style.justifyContent = 'center';
    bar.style.position = 'fixed';
    bar.style.left = 0;
    bar.style.right = 0;
    bar.style.bottom = 0;
    bar.style.zIndex = 99999;

    const text = document.createElement('h1');
    text.innerText = 'Warning! This is a production or staging environment. Be careful!';
    text.style.color = 'white';
    text.style.margin = 0;

    bar.appendChild(text);
    document.body.appendChild(bar);
}

function getAppName() {
    const element = document.querySelector('.glostick-header .app-name');
    if (!element) {
        return null;
    }

    return element.innerText;
}

function showBarIfNeeded() {
    removeBar();

    const appName = getAppName();
    if (!appName || (!appName.includes('live') && !appName.includes('production'))) {
        return;
    }

    showBar();
}

setInterval(function() {
    const appName = getAppName();
    if (appName != window.cachedAppName) {
        showBarIfNeeded();
    }

    window.cachedAppName = appName;
}, 1000);
