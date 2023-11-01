function handleBreadcrumbLinks() {
    breadcrumblinks.forEach(function (breadcrumblink, index) {
        breadcrumblink.onclick = function (e) {
            breadcrumblinks.forEach(function (breadcrumblink, index) {
                breadcrumblink.classList.remove('active');
                document.querySelector(breadcrumblink.getAttribute('href')).style.display = 'none';
            });
            this.classList.add('active');
            document.querySelector(this.getAttribute('href')).style.display = 'block';
            this.setAttribute('herf', this.getAttribute('href') )
        };
    });
}

function resetBreadcrumbs() {
    breadcrumblinks.forEach(function (breadcrumblink) {
        document.querySelector(breadcrumblink.getAttribute('href')).style.display = 'block';
    });
}

var mql = window.matchMedia('(max-width: 740px)');
if (mql.matches) {
    handleBreadcrumbLinks();
}

mql.addListener(function (e) {
    if (!e.matches) {
        resetBreadcrumbs();
    } else {
        handleBreadcrumbLinks();
    }
});