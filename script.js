function showPage(pageId) {
    document.querySelectorAll('.content').forEach(div => div.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}
