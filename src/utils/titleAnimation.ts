import { gsap } from 'gsap';

export const addTitleHoverEffect = (titleElement: HTMLElement) => {
  const words = titleElement.textContent?.split(' ') || [];
  titleElement.textContent = '';
  
  // Check if this is Featured Projects or Work Experience title
  const isSpecialTitle = words.join(' ') === 'Featured Projects' || words.join(' ') === 'Work Experience';
  const hoverSpacing = isSpecialTitle ? '0.6em' : '0.4em';
  
  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement('span');
    wordSpan.style.display = 'inline-block';
    wordSpan.style.whiteSpace = 'nowrap';
    
    const chars = word.split('');
    chars.forEach((char) => {
      const charSpan = document.createElement('span');
      charSpan.textContent = char;
      charSpan.style.display = 'inline-block';
      wordSpan.appendChild(charSpan);
    });

    titleElement.appendChild(wordSpan);
    
    // Add space after word (except for last word)
    if (wordIndex < words.length - 1) {
      const space = document.createElement('span');
      space.textContent = ' ';
      space.style.display = 'inline-block';
      space.style.width = '0.25em';
      space.classList.add('word-space');
      titleElement.appendChild(space);
    }
  });

  titleElement.addEventListener('mouseenter', () => {
    gsap.to(titleElement.querySelectorAll('span > span'), {
      y: -5,
      scale: 1.1,
      stagger: 0.02,
      ease: 'power2.out'
    });
    
    gsap.to(titleElement.querySelectorAll('.word-space'), {
      width: hoverSpacing,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  titleElement.addEventListener('mouseleave', () => {
    gsap.to(titleElement.querySelectorAll('span > span'), {
      y: 0,
      scale: 1,
      stagger: 0.02,
      ease: 'power2.out'
    });
    
    gsap.to(titleElement.querySelectorAll('.word-space'), {
      width: '0.25em',
      duration: 0.3,
      ease: 'power2.out'
    });
  });
};
