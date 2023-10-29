var breadcrumblinks = $$('.breadcrumb-link') ; 
breadcrumblinks.forEach(function(breadcrumblink, index){
    breadcrumblink.onclick = function(e){
        $('.breadcrumb-link.active').classList.remove('active');
        this.classList.add('active') ; 
    }
})