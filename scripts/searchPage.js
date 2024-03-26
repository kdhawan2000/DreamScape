document.querySelector('.price-sort').addEventListener('click', function () {
    const sortDirection = this.getAttribute('data-sort');
    const icon = this.querySelector('i');

    if (sortDirection === 'asc') {
        icon.classList.remove('fa-sort-up');
        icon.classList.add('fa-sort-down');
        this.setAttribute('data-sort', 'desc');
    } else {
        icon.classList.remove('fa-sort-down');
        icon.classList.add('fa-sort-up');
        this.setAttribute('data-sort', 'asc');
    }
});