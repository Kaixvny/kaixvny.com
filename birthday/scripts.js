document.getElementById('openPopupBtn').addEventListener('click', function() {
    document.getElementById('popupContainer').classList.remove('hidden');
});

document.getElementById('popupContainer').addEventListener('click', function() {
    this.classList.add('hidden');
});
