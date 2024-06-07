document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const tableRows = document.querySelectorAll('.table__body .table__row');
    const menuToggle = document.getElementById('menuToggle');
    const sidebarNav = document.querySelector('.nav__list');

    searchInput.addEventListener('keyup', function () {
        const searchTerm = searchInput.value.toLowerCase();

        tableRows.forEach(row => {
            const cells = row.querySelectorAll('.table__cell');
            const matches = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(searchTerm));
            if (matches) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    menuToggle.addEventListener('click', function () {
        sidebarNav.classList.toggle('nav__list--show');
    });
});
