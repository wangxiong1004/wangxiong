
module.exports = function(css) {
    console.log(css);
    console.log(window.innerWidth);

    if (window.innerWidth > 768) {
        return css.replace('#ccc', '#fff');
    } else {
        return css.replace('#ccc', '#e5e5e5');
    }
    
    
};