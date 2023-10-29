const breadcrumbLinks = document.querySelectorAll('.breadcrumb-link');
let shouldListenScroll = true;

function toggleScrollEvent() {
    if (shouldListenScroll) {
        window.addEventListener('scroll', setActiveMenuItem);
    } else {
        window.removeEventListener('scroll', setActiveMenuItem);
    }
}

function setActiveMenuItem() {
    const currentPos = window.scrollY;

    breadcrumbLinks.forEach(breadcrumbLink => {
        const sectionId = breadcrumbLink.getAttribute('href');
        const section = document.querySelector(sectionId);

        if (section && section.offsetTop <= currentPos && section.offsetTop + section.offsetHeight > currentPos) {
            breadcrumbLink.classList.add('active');
        } else {
            breadcrumbLink.classList.remove('active');
        }
    });
}

toggleScrollEvent(); // Kích hoạt sự kiện lắng nghe cuộn mặc định

breadcrumbLinks.forEach(breadcrumbLink => {
    breadcrumbLink.onclick = function(e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        breadcrumbLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
        shouldListenScroll = false;
        toggleScrollEvent();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            window.removeEventListener('scroll', setActiveMenuItem); // Tạm thời tắt sự kiện cuộn
            section.scrollIntoView({ behavior: 'smooth' }); // Cuộn đến phần tử liên quan
            setTimeout(() => {
                shouldListenScroll = true;
                toggleScrollEvent();
            }, 1000); // Sau khi cuộn xong, kích hoạt lại sự kiện cuộn
        }
    };
});
