  const typingElement = document.querySelector(".typing");
  const roles = ["Web Developer", "Competitive Programmer ", "UI/UX Designer"];
  let roleIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < roles[roleIndex].length) {
      typingElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
  });
