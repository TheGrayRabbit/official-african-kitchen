window.addEventListener('scroll',() =>{
   var nav = document.querySelector('.bg').classList.toggle('window-scroll', window.scrollY > 100);

   //    if (nav.classList.contains('window-scroll')){
    //     nav.classList.add('all-white')
//    }
});

// window.addEventListener('scroll',() =>{
//     var scrollText = document.querySelector('.white-tag').classList.toggle('text-scroll', window.scrollY > 100);
//  });
