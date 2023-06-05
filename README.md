# middle-button-no-paste
Linux下指定网站禁用鼠标中键粘贴 | Disable middle mouse button paste for a specified website on Linux.

简体中文 / [English](https://github.com/zskzskabcd/middle-button-no-paste/blob/main/README_EN.md)

鼠标中键粘贴是非常实用的功能，我们无需因为一两个应用的兼容性问题而禁用它。

这个项目的目的是在浏览器中禁用指定网站上的鼠标中键粘贴功能，例如即时设计、MasterGo等设计类应用。

这是一个浏览器脚本，你可以使用[油猴](https://www.tampermonkey.net/)、[脚本猫](https://docs.scriptcat.org/)等来安装运行它。

代码如下：

```js
// ==UserScript==
// @name         禁用鼠标中键粘贴
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Linux下指定网站禁用鼠标中键粘贴
// @author       Wear_lz
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // 在此处设定你要禁用中键粘贴的网站
  const targetWebsites = ['example.com', 'mastergo.com', 'js.design'];

  const currentWebsite = window.location.hostname;

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

复制上面的代码，在油猴/脚本猫中新建粘贴，修改你要禁用的网站即可。