---
slug: '/grid-does-not-replace-flexbox'
date: '2019-07-14'
title: 'CSS Grid Is Not a Replacement for Flexbox'
# Description should be no more than 160 characters in length
description: 'CSS grid cannot completely replace the need for flexbox layout when it comes to styling HTML elements.'
categories: ['css']
banner: './images/banner.png'
---

import Example from "./Example";

![CSS Grid Is Not a Replacement for Flexbox](./images/banner.png)

I've only recently started using CSS grid properties when styling HTML elements. In order to force myself to become comfortable with the CSS grid properties, I wanted to completely stop using flexbox properties in my code and instead use CSS grid properties. However, I quickly found out that CSS grid is not a replacement for flexbox since there are a few scenarios in which you can only style a layout with flexbox.

This post will highlight one of the scenarios in which a layout can only be styled with flexbox and not CSS grid:

## Wrapping Elements

Flexbox should be used if items are to be wrapped to the next line when the width of the flex container becomes narrower. This can be done using the [`flex-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) property.

CSS grid is capable of having varying column widths and adjusting the number of columns based on the width of the container and the width of the child elements. This can be done using the `grid-template-columns` property in combination with the `auto-fit` or `auto-fill` keywords (read more about that in [this article](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/) by [Sara Soueidan](https://twitter.com/SaraSoueidan)). However, the wrapped elements cannot be centered relative to the parent like they can be in flexbox.

Take a look at the following example of elements that wrap to the next line when the container width changes. In the flexbox example, when the width of the parent container decreases, the wrapped element becomes centered relative to the parent container. When the same resizing action is done in the grid example, the element wraps onto the next line, but it cannot be centered relative the the parent container.

You can try out the example yourself by dragging the handle on the bottom right of the parent container of each example to change the width. Otherwise, there is a video of the demo that can be viewed.

### Flexbox Example

<Example type="flex" />

#### Flexbox Video Demo

<Video src="/flexbox" />

### Grid Example

<Example type="grid" />

#### Grid Video Demo

<Video src="/grid" />

---

## Useful Resources

The following links explain whether CSS grid of flexbox is the most appropriate tool for styling a particular layout:

-   Cris Coyier: [Quick! What’s the Difference Between Flexbox and Grid?](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/)
-   Rachel Andrew: [Use Cases For Flexbox](https://www.smashingmagazine.com/2018/10/flexbox-use-cases/)
