const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListner('mouseover',function(e) {
    span.classList.add('animated','rubberBand')
}))
spans.forEach(span => span.addEventListner('mouseout',function(e) {
    span.classList.remove('animated','rubberBand')
    }))