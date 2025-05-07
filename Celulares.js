(async () => {
    if('loading' in HTMLImageElement.prototype){
            const images = document.querySelectorAll('img.js-lazy')
            imagens.forEach(image => Image.src = image.dataset.src) }
                
    } else {
        await import('./lazysizes.min.js')
        window.lazySizesConfig = window.lazySizesConfig  
        window.lazySizesConfig.lazyClass = 'js-lazy'
        lazySiizes.init()        
})