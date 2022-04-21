function changeImage() {
    let displayImage = document.getElementById('image1')
    if(displayImage.src.match('source/Boo.jpg')) {
        displayImage.src = 'source/BooNest.jpg'
    } else {
        displayImage.src = 'source/Boo.jpg'}
}


//I can't figure out why this isn't working; 
//I followed a tutorial and I'm not sure where I messed up.