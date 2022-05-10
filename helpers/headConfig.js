const headConfig = (head) => {
    const {title, description, keywords, canonical } = head
    if(title){
        document.title = title
    }
    if(canonical){
        const can = document.querySelector('link[rel=canonical]')
        if(can){
            can.setAttribute('href', canonical)
        } else {
            const newCan = document.createElement('link')
            newCan.setAttribute('rel', 'canonical')
            newCan.setAttribute('href', canonical)
            document.querySelector('head title').after(newCan)
        }
    }
    if(keywords){
        const keys = document.querySelector('meta[name=keywords]')
        if(keys){
            keys.setAttribute('content', keywords)
        } else {
            const newKeys = document.createElement('meta')
            newKeys.setAttribute('name', 'keywords')
            newKeys.setAttribute('content', keywords)
            document.querySelector('head title').after(newKeys)
        }
    }
}

export default headConfig