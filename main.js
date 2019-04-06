$(p1).on('click',function(){
    $(images).css({     /*这里的 .css 是更改元素的style，但是由于jq命名错了就这样用吧*/ 
        transform:'translateX(0)'
    })
})

$(p2).on('click',function(){
    $(images).css({
        transform:'translateX(-300px)'
    })
})

$(p3).on('click',function(){
    $(images).css({
        transform:'translateX(-600px)'
    })
})