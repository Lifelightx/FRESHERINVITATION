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
gsap.from('#text',{
    opacity: 0,
    scrollTrigger: {
        trigger: "#text",   
        start: "top 90%",
        scroller: 'body',
        end:"top 30%", 
        toggleActions: "play none none none",
      }
})
gsap.from('#year',{
    opacity: 0,
    scrollTrigger: {
        trigger: "#text", 
        scroller: 'body',  
        start: "top 90%",
        end:"top 30%", 
        toggleActions: "play none none none",
      }
})
gsap.to("#text", {
  text: {value: "PARICHAYA", scrambleText: {chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", revealDelay: 0.1}},
  duration: 1.8, 
  
   // Speed of the animation
  color:'#01716a',  
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#text",  
    scroller:'body', 
    start: "top 45%",
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
    start: "top 45%",
    end:"top 10%", 
    toggleActions: "play none none none",
  }
});

function inviteBreakpoint(){
    const paragraph = document.querySelector('#paragraph')  
    const textContect = paragraph.textContent
    const splittedText = textContect.split(' ')
    console.log(splittedText)
    
    var Inviteclutter = ''
    splittedText.forEach(function(ele, index){
        Inviteclutter += `<span class='inviteMesssage ' id='inviteMsg${index}'>${ele} </span>`
    })
    
    paragraph.innerHTML = Inviteclutter

}

inviteBreakpoint()

gsap.from('#paragraph', {
    opacity:0,
    scrollTrigger: {
        trigger: '#paragraph',
        scroller: 'body',
        start: 'top 75%',
        end: 'top 10%',
        scrub: true
    }
})

gsap.from('#paragraph .inviteMesssage',{
    opacity: 0,
    rotate: '20deg',
    duration: 3,
    stagger:1,
    scrollTrigger: {
        trigger: '#paragraph .inviteMesssage',
        scroller: 'body',
        start: 'top 75%',
        end: 'top 20%',
        scrub: true
    }
})

function secondBreakpoint(){
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
        end: 'top 8%',
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

if (window.innerWidth < 768) {
    gsap.to("#firstPage #welcome", {
        x: 250,  // Adjust for smaller screens
        scrollTrigger: {
            trigger: "#firstPage .headers",
            start: "top 50%",
            end: "top 10%",
            scrub: true
        }
    });

    gsap.to("#firstPage #institute", {
        x: -300,  // Adjust for smaller screens
        scrollTrigger: {
            trigger: "#firstPage .headers",
            start: "top 50%",
            end: "top 10%",
            scrub: true
        }
    });
}
