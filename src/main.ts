import { CoreViewer, Navigation, PageViewMode } from '@vivliostyle/core';

const viewer = document.getElementById('viewer');
if (!viewer) {
    throw new Error('Viewer element not found');
}

const settings = {
    viewportElement: viewer as HTMLElement
}

const options = {
    autoResize: true,
    fitToScreen: true,
    renderAllPages: true,
    pageViewMode: 'autoSpread' as PageViewMode
}

const Viewer = new CoreViewer(settings, options);
Viewer.loadDocument('publish.html');

document.addEventListener('click', (event) => {
    const page = (event.target as Element)?.closest('[data-vivliostyle-spread-container]');
    if (!page) return; // クリックされた要素にターゲットがない場合は終了
    const rect = page.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const halfWidth = rect.width / 2;

    if (clickX < halfWidth) {
        // 左半分をクリックした場合
        Viewer.navigateToPage(Navigation.NEXT);
    } else {
        // 右半分をクリックした場合
        Viewer.navigateToPage(Navigation.PREVIOUS);
    }
});

document.onkeydown = (e) => {
    if (e.key === 'ArrowRight') {
        Viewer.navigateToPage(Navigation.PREVIOUS);
        console.log("LR?",Viewer.getCurrentPageProgression());
        console.log(document?.querySelector("[data-vivliostyle-spread-container]")?.childElementCount);
    } else if (e.key === 'ArrowLeft') {
        Viewer.navigateToPage(Navigation.NEXT);
    }
}
