const cursor = document.querySelector('#cursor')
const main = document.querySelector('#main')


gsap.from('#navContainer #leftPart',{
    delay:0.5,
    duration:1,
    y:-100,

})

gsap.from('#firstPage .headers',{
    duration: 2,
    opacity: 0,
    y: 100,
    stagger:1
    
    
})
gsap.to('#firstPage #welcome',{
   
   x: 500,
    scrollTrigger:{
        trigger: '#firstPage .headers',
        scroller: 'body',
        start: 'top 40%',
        end: 'top 0%',
        scrub: true
    }
})
gsap.to('#firstPage #institute',{
   
   x: -700,
    scrollTrigger:{
        trigger: '#firstPage .headers',
        scroller: 'body',
        start: 'top 40%',
        end: 'top 0%',
        scrub: true
    }
})

function breakpoint(){
    const textMca = document.querySelector('#textMca')
const textContect = textMca.textContent
const splittedText = textContect.split('')

var clutter = ''
splittedText.forEach(function(ele){
    clutter += `<span class='clutter'>${ele}</span>`
})

textMca.innerHTML = clutter
}
breakpoint()

function secondBreakpoint(){


gsap.from('#secondPage .clutter', {
    y:100,
    opacity: 0,
    duration: 1.5,
    stagger:1,
    scrollTrigger: {
        trigger: '#secondPage .preText',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true
    }
});

gsap.from('#secondPage #para',{
    duration: 1,
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: '#secondPage #para',
        scroller: 'body',
        start: 'top 100%',
        end: 'top 70%',
        scrub: true
    }
})
gsap.registerPlugin(TextPlugin, ScrollTrigger);

// Scrambling from random characters to "DEPARTMENT OF CS"
gsap.to("#text", {
  text: {value: "AHVANAM:", scrambleText: {chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", revealDelay: 0.1}},
  duration: 1.8, 
   // Speed of the animation
  color:'#01716a',  
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#text",   
    start: "top 40%",
    end:"top 10%", 
    toggleActions: "play none none none",
  }
});
gsap.to("#year", {
  text: {value: "2024", scrambleText: {chars: "1234567890", revealDelay: 0.1}},
  duration: 1.8, 
   // Speed of the animation
  color:'#01716a',  
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#text",   
    start: "top 40%",
    end:"top 10%", 
    toggleActions: "play none none none",
  }
});

const message = document.querySelector('#message').textContent;
const splittedMessage = message.split(' ')
var msgclutter = ''
splittedMessage.forEach(function(ele , index){
    msgclutter += `<span class='msgclutter msg${index}'>${ele} &nbsp;</span>`
})
document.querySelector('#message').innerHTML = msgclutter
}

secondBreakpoint()

gsap.from('#pageFour .msgclutter',{
    x:100,
    opacity: 0,
    duration: 1.5,
    stagger:1,
    rotation:-5,
    scrollTrigger: {
        trigger: '#pageFour #message',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 0%',
        scrub: true
    }
})



main.addEventListener('mousemove', function(event){
    gsap.to(cursor, {
        x: event.clientX - 25, // Offset by half the cursor size to center it
        y: event.clientY - 25, 
        duration: 0.3
    });
});