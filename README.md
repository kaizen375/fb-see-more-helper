# Facebook "See More" Expander Bookmarklet

This simple bookmarklet automatically clicks all "See more" buttons on a Facebook profile or feed page. It expands long posts so you don’t have to manually click each one.

## 🔧 How to Use

1. Open your browser’s **bookmarks bar**.
2. Create a **new bookmark**.
3. Name it something like `Expand FB Posts`.
4. Paste the code below into the **URL/location** field:
5. While viewing a Facebook profile or timeline, click the bookmark. All "See more" links on the page will be clicked automatically.
6. Optionally open up the fb-see-more-helper.html and drag the link to your bookmark bar.

## 📌 Notes

- Works only on content you already have access to (i.e. you're logged in and allowed to view the posts).
- Best used after scrolling down to load more posts.
- Does **not** scrape, download, or store any content.
- Does **not** collect or transmit any data.
- Intended for personal convenience (e.g., for reading, searching, or saving via single-file snapshot tools).

---

## ⚠️ Disclaimer

This script automates a manual task — clicking "See more" buttons — that a user would normally do themselves.

It:

- Only acts on content visible in your browser  
- Does not bypass Facebook login or access controls  
- Is not intended for mass data collection or commercial use  

Use responsibly and in accordance with [Facebook’s Terms of Service](https://www.facebook.com/terms.php).  
The author is not responsible for how it is used.




```javascript
javascript:(function(){document.querySelectorAll('div[role="button"]').forEach(el => {if(el.innerText.includes("See more")) el.click();});})();
