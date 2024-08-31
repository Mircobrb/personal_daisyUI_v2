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


