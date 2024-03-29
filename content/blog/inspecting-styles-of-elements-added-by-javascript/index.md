---
slug: '/inspecting-styles-of-elements-added-by-javascript'
date: '2019-07-14'
title: 'Inspecting CSS Styles of HTML Elements That Are Added & Removed by Javascript'
# Description should be no more than 160 characters in length
description: 'Learn how to inspect CSS styles in Chrome for HTML elements that are added, removed, or modified by JavaScript.'
categories: ['javascript', 'css']
banner: './images/banner.png'
---

import ShadesOfGrey from "./ShadesOfGrey";

![Inspecting CSS Styles of HTML Elements That Are Added & Removed by Javascript](./images/banner.png)

A problem I occasionally run into on the web is when I want to inspect the CSS for HTML elements that are added or removed by JavaScript when certain DOM events occur, such as a [mouseover](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) event (i.e. hover) or [focus](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event) event. The problem with inspecting the CSS for these HTML elements is that when you try to inspect the elements with a browser's devtools, the element or styles may disappear because the DOM event that triggered the JavaScript is no longer applicable.

> **Note:** This article explains how to solve this issue using a **Chrome** browser.

Take the following element as an example. There is one grey circle that is shown and when hovered over, it will display three additional circles. However, if you try to inspect the styles of the newly appeared circles, they will disappear since there is JavaScript that removes the circles on a [`mouseleave` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event). Try it for yourself:

<ShadesOfGrey />

Here are two possible solutions to this problem:

## Solution 1: Manually pause JavaScript execution

If you open the Chrome devtools (`⌘ + ⌥ + J` or `⌘ + ⌥ + I`) and go to the **Sources** tab, you will be able to pause the execution of JavaScript that is running on the page. The JavaScript execution can be paused using a keyboard shortcut (`⌘ + \`). So in the above example, you could open the **Sources** tab in the Chrome devtools, hover over the first grey circle, and use the keyboard shortcut (`⌘ + \`) to pause the execution of JavaScript on the page, this will enable you to inspect the elements of the three hidden circles without having them disappear.

<Video src="/method-1" />

> **Note:** The keyboard shortcut to pause the execution of JavaScript only works if the Sources tab is open in the Chrome devtools.

## Solution 2: Pausing JavaScript execution on Subtree Modifications

There is an option in Chrome devtools that allows you to select an element and have the JavaScript pause its execution whenever any nested DOM nodes are modified. This can be done by opening the Chrome devtools (`⌘ + ⌥ + J` or `⌘ + ⌥ + I`), navigate to the **Elements** tab, find the element of interest, and select the option **Break on** -> **subtree modifications**.

In the case of the example presented above, you would target the parent container holding the grey circles, select **Break on** -> **subtree modifications** in the **Elements** tab of the Chrome devtools, and then hover over the first grey circle. This will pause the JavaScript execution just before one of the three additional grey circles is added. You will need to click the button that resumes the JavaScript execution in order to display the first of three grey circles. After the first circle is added, the JavaScript execution will again pause because the browser has detected that an additional circle element will be added to the DOM. Continue resuming the JavaScript execution until all four grey circles appear on the screen and then you can inspect each circle's styles as you normally would in the developer tools.

<Video src="/method-2" />

> **Note:** If you run into a case where JavaScript dynamically adds attributes to DOM elements, you can use the same technique to pause the JavaScript execution when an attribute change. The only difference is you would choose the option **Break on** -> **attribute modifications** instead.
