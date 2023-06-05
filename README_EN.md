# middle-button-no-paste

Linux 下指定网站禁用鼠标中键粘贴 | Disable middle mouse button paste for a specified website on Linux.

[简体中文](https://github.com/zskzskabcd/middle-button-no-paste/) / English

Middle-click paste is a very useful function, and we don't need to disable it because of compatibility issues with one or two applications.

This project aims to disable the middle-click paste function of designated websites in browsers, such as js design, MasterGo, and other design-related applications.

This is a browser script that you can install and run using tools such as [Tampermonkey](https://www.tampermonkey.net/) and [ScriptCat](https://docs.scriptcat.org/).

Here's the code:

```js
// ==UserScript==
// @name         Disable middle mouse button paste on Linux
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Disables middle mouse button paste on Linux for specified websites in an array
// @author       Wear_lz
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Define the target websites here
  const targetWebsites = ['example.com', 'mastergo.com', 'js.design'];

  // Get the current website domain
  const currentWebsite = window.location.hostname;

  // If the current website is in the target list, disable middle mouse button paste
  if (targetWebsites.includes(currentWebsite)) {
      document.addEventListener('mouseup', function(event){
          if(event.button === 1){
              event.preventDefault();
              return false;
          }
      });
  }
})();
```

Copy the above code, create a new script in Tampermonkey/ScriptCat, and modify the website you want to disable accordingly.
