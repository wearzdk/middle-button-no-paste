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