# Facebook "See More" Expander Bookmarklet

This simple bookmarklet automatically clicks all "See more" buttons on a Facebook profile or feed page. It expands long posts so you don’t have to manually click each one.

## 🔧 How to Use

1. Open your browser’s **bookmarks bar**.
2. Create a **new bookmark**.
3. Name it something like `Expand FB Posts`.
4. Paste the code below into the **URL/location** field:

```javascript
javascript:(function(){document.querySelectorAll('div[role="button"]').forEach(el => {if(el.innerText.includes("See more")) el.click();});})();
