//Creates animated text effects for the professional title
//Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // ===== ANIME.JS =====
  const { animate, splitText, stagger } = anime;

   //Split text into individual characters for animation
  const { chars: chars1 } = splitText('.prof1', { chars: true });
  const { chars: chars2 } = splitText('.prof2', { chars: true });

   //Animate the first title text
  animate(chars1, {
    //Move characters upward and return them to position
    y: [
      { to: ['-60%', '0%'] },
      { to: '-30%', delay: 4000, ease: 'in(3)' }
    ],
    //Animation duration
    duration: 900,
     //Smooth easing effect
    ease: 'out(3)',
    //Delay each character animation
    delay: stagger(80),
     //Repeat animation continuously
    loop: true,
  });

    //Animate the second title text
  animate(chars2, {
    y: [
      { to: ['-60%', '0%'] },
      { to: '-30%', delay: 4000, ease: 'in(3)' }
    ],
    duration: 900,
    ease: 'out(3)',
    delay: stagger(80),
    loop: true,
  });

});