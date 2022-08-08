document.addEventListener('DOMContentLoaded', function() {
    function isVisible(element) {
        let elementBox = element.getBoundingClientRect();
        let distanceFromTop = -200;

        if (elementBox.top - window.innerHeight < distanceFromTop) {
            return true;
        }
    }

    function scanDocument() {
        let portfolioSection = document.querySelector('.portfolio');
        let servicesSection = document.querySelector('.services .grid-container');
        let aboutUsSection = document.querySelector('.about-us');


        let videos = document.querySelectorAll('.video');
        let descriptions = document.querySelectorAll('.services .grid-item')
        let photoBioItems = document.querySelectorAll('.about-us .grid-item')

        i = 1;
        j = 1;
        k = 1;

        if (isVisible(portfolioSection)) {
        Array.prototype.forEach.call(videos, function(video) {
            setTimeout(function(){
                video.classList.add('visible') }, 200 * i)
                i++;
            })
        }
        if (isVisible(servicesSection)) {
        Array.prototype.forEach.call(descriptions, function(description) {
            setTimeout(function(){
                description.classList.add('visible') }, 200 * j)
                j++;
            })
        }
        if (isVisible(aboutUsSection)) {
        Array.prototype.forEach.call(photoBioItems, function(photoBioItem) {
            setTimeout(function(){
                photoBioItem.classList.add('visible') }, 200 * k)
                k++;
            })
        }
    }

    document.addEventListener("scroll", scanDocument);
});