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
// Get the checkbox element
const themeCheckbox = document.getElementById('theme-checkbox');

// // Save the checkbox state in localStorage
themeCheckbox.addEventListener('change', () => {
    localStorage.setItem('theme-checkbox-checked', themeCheckbox.checked);
});
// // On page load, retrieve the state from localStorage
const isChecked = localStorage.getItem('theme-checkbox-checked') === 'true';

// // Set the checkbox state based on the stored value
document.getElementById('theme-checkbox').checked = isChecked;


