// Write to clipboard

async function copyContent() {
    try {
      await navigator.clipboard.writeText('https://mircobarbero.netlify.app/');
      console.log('Content copied to clipboard');
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      console.error('Failed to copy: ', err);
      /* Rejected - text failed to copy to the clipboard */
    }
    document.getElementById('copyTooltip').setAttribute('data-tip', 'Copied!');
  }

  function outFunc() {
    
    document.getElementById("copyTooltip").setAttribute('data-tip', 'Copy link');

  }


// Theme icon
// document.addEventListener('DOMContentLoaded', function () {
//   const themeIcon = document.getElementById('theme-icon');
//   const sunIcon = document.getElementById('sun-icon');
//   const moonIcon = document.getElementById('moon-icon');
  
//   const theme = document.documentElement.getAttribute('data-set-theme');
  
//   if (theme === 'dark') {
//       sunIcon.classList.add('hidden');
//       moonIcon.classList.remove('hidden');
//   } else {
//       moonIcon.classList.add('hidden');
//       sunIcon.classList.remove('hidden');
//   }
// });
