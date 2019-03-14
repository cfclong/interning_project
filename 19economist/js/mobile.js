$(function(){
    var pathname = location.pathname;
    if (mobilecheck()) {
        isMobile = true;
        if (pathname.indexOf('/m/') === -1) {
            location.pathname = pathname.slice(0, pathname.lastIndexOf('/')) + '/m/';
            console.log(location.pathname)
        }
    } else {
        if (pathname.indexOf('/m/') !== -1) {
            location.pathname = pathname.replace('/m/', '/');
            console.log(location.pathname)
        }
    }
})
