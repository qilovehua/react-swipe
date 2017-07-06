# react-swipe-plus

forked from voronianski's react-swipe & swipe-js-iso

## Diff
1. new swipeOptions - margin, default 0(slide_width = 100% - margin * 2)
1. new swipeOptions - degree, default 0(no 3D when swipe)

## Demo

with 3D
<p>
<img src="https://github.com/qilovehua/react-swipe-plus/blob/master/demo/swipe-3d.gif" width="600" />
<p>
swipeOptions:
file:///Users/qilovehua/react/react-swipe/demo/index.html?slidesNum=5&continuous=true&auto=0&speed=3000&startSlide=3&margin=30&degree=9

====

without 3D
<p>
<img src="https://github.com/qilovehua/react-swipe-plus/blob/master/demo/swipe-no-3d.gif" width="600" />
</p>
swipeOptions:
file:///Users/qilovehua/react/react-swipe/demo/index.html?slidesNum=5&continuous=true&auto=0&speed=3000&startSlide=3&margin=30

## Config Options
[from voronianski/swipe-js-iso](https://github.com/voronianski/swipe-js-iso#config-options)
Swipe can take an optional second parameter– an object of key/value settings:

- **startSlide** Integer *(default:0)* - index position Swipe should start at

-       **speed** Integer *(default:300)* - speed of prev and next transitions in milliseconds.

- **auto** Integer - begin with auto slideshow (time in milliseconds between slides)

- **continuous** Boolean *(default:true)* - create an infinite feel with no endpoints

- **disableScroll** Boolean *(default:false)* - stop any touches on this container from scrolling the page

- **stopPropagation** Boolean *(default:false)* - stop event propagation

- **swiping** Function - invoked while swiping with the percentage (0-1) of the full width that has been swiped.

-       **callback** Function - runs at slide change.

- **transitionEnd** Function - runs at the end slide transition.

- **margin** Integer *(default:0)* - set slide_width = 100% - margin * 2.

- **degree** Integer *(default:0)* - 3D when slide change.


## How to use

```bash
git clone react-swipe-plus
cd react-swipe-plus/demo
open index.html (by browser)
```

## Usage


**MIT Licensed**
