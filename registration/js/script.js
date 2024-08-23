function openPopup() {
    console.log("Open");
    document.getElementById('qrPopup').style.display = 'block';
}

function closePopup() {
    console.log("Close");

    document.getElementById('qrPopup').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function () {
  
    function handleResize() {
        if (window.innerWidth < 768) {
            document.querySelector('.navbar-back-button').style.display = 'block';
            // document.querySelector('.desktopSwiper').style.display = 'none';
        } 
        else{
            document.querySelector('.navbar-back-button').style.display = 'none';

        }
    }

    // Initial check
    handleResize();

    // Listen to resize events
    window.addEventListener('resize', handleResize);
});