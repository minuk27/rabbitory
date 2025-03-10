function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
            localStorage.setItem('lastPage', page); // 마지막 페이지 저장
        })
        .catch(error => console.error('Error loading content:', error));
}

function onInitialLoad() {
    if (!performance.navigation.type || performance.navigation.type === 0) {
        // 웹페이지 최초 접속
        console.log("First visit");
        loadContent('pages/home.html');
    } else {
        // 새로고침
        console.log("Page refreshed");
        const lastPage = localStorage.getItem('lastPage');
        if (lastPage) {
            loadContent(lastPage);
        } else {
            loadContent('pages/home.html');
        }
    }
}