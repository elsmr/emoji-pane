# Emoji pane

[![Dependencies](https://david-dm.org/eliasmeire/emoji-pane.svg)](https://david-dm.org/eliasmeire/emoji-pane.svg)
[![Build Status](https://travis-ci.org/eliasmeire/emoji-pane.svg?branch=master)](https://travis-ci.org/eliasmeire/emoji-pane)
> An emoji keyboard for React

For an example of the emoji pane in action, go to http://eliasmei.re/emoji-pane/.

![emoji-pane demo](https://raw.githubusercontent.com/eliasmeire/emoji-pane/master/emoji-pane.gif)

## Getting started

### Installing

`npm install emoji-pane`

### Import component

```js
import EmojiPane from 'emoji-pane';
```

### Import CSS (optional)

If you use Webpack with css loader:

```js
import 'emoji-pane/dist/css/emojiPane.css';
```

Otherwise import it in your HTML `head` section.

### Example usage

In your react component:

```js
<EmojiPane
    filter="leaf"
    onSelected={logEmoji}
    recents={recents}
    recentsSize={12}
    skinTone={4}
/>
```

## API

### EmojiPane

#### Props

**filter {String}**

An initial search filter for the emojis.

**onSelected([emoji]) {Function}**

- `emoji` {Object}

This callback gets called when the user selects an emoji.

**recents {Array}**

An array of emoji objects that were used recently.

**recentsSize {Number}**

Maximum amount of emojis in the recent section.

**skinTone {Number}**

A number representing the preferred skin tone.

- `0`: Neutral skin tone
- `1`: Light skin tone (🏻)
- `2`: Medium-light skin tone (🏼)
- `3`: Medium skin tone (🏽)
- `4`: Medium-dark skin tone (🏾)
- `5`: Dark skin tone (🏿)


## Development

Clone this repository.

`npm install`

`npm run storybook`
