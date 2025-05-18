// Bookmarklet: Expand all Facebook "See more" post text

javascript:(function(){
  document.querySelectorAll('div[role="button"]').forEach(el => {
    if (el.innerText.includes("See more")) el.click();
  });
})();
