# Weber

| Contents |
| :- |
| [My thoughts](#My-thoughts) |
| [Preliminary details](#Preliminary-details) |
| [Conclusion & Contributions](#Conclusion) |

Weber used to be a custom programming language that compiles to web-langs, but I've decided to use Markdown for the HTML bit now.
I'm trying to keep things simple, and GitHub already supports `.md` files and renders them to a digestible html (just like this file!)

## My thoughts

I've got a couple ideas for a workflow that could work well, including a website that you can upload a `.zip` to, edit things, and just download the `.zip` again.

Maybe even a desktop app? Idk that seems a bit unnecessarily complicated. It does have a certain appeal though...

I know Jekyll exists, but it seems a pain to set up - especially if anyone wants to make a site without any knowledge of the commandline.
(typing commands in a vulnerable place on your pc without knowing what it does seems a bit... yeah.)
Using the same line of reasoning, downloading apps from an unknown source would be a bad idea too...

## Preliminary details

When I make a language, I like to do mockups of the finished language, and _then_ try to implement it - it helps to get the concept clear in my head.
I thought I could do the same here.

### HTML

HTML can be a tough nut to crack, but I thought that just copying the Markdown syntax would be a good solution for that.
After all, people already know it, and its easy to pick up from the many tutorials that are out there.

### CSS

CSS could just be declared inside a `.css` file. It's a pretty easy-to-understand syntax.
Then again, the complexities of CSS are really tough, even for people with experience.

Perhaps an optional `.json` file could work instead? Then things like

```json
{
    "div": {
        "centered": true
    }
}
```

could be done easily. And preprocessed CSS could also be implemented with things like

```json
{
    "div": {
        "background-color": {
            "condition": "dark_theme",
            "true": "#111C14",
            "false": "#ffffff"
        }
    }
}
```

which would change the background colour based on if the theme is in dark mode, although I'm not sure how that could be changed...
Maybe JavaScript? Perhaps a new form of event system that `<button>` elements could have? idk.
A switch statement could also be implemented, to produce a similar result, but slightly different syntax...

```json
{
    "div": {
        "background-color": {
            "switch": "theme",
            "dark": "#111C14",
            "light": "#ffffff",
            "sunset": "#E66000",
            "midnight": "#000000"
        }
    }
}
```

Damn, I've really gone overboard with this haven't I? I think I'll play around with a concept like this and make it more fleshed out.
I should do a proper documentation to go through these ideas, and then let people unleash their creativity! 

### JavaScript

I don't really know how I'd do this, as any form of `eval()` or `new Function()` could pose a security risk. Tbh I'm not sure how I could get around that anyway.

Unless I make a completely different language for it...

_No Mag, bad idea._

![JavaScript is JavaScript meme haha such funny](https://user-images.githubusercontent.com/25611707/148683938-e7a8cc21-483a-4f07-88a6-1fd9c3ddd688.jpg)

### Configuration

I was thinking that a `.json` file in the root folder could do configuration and general settings, but I'm not sure what kind of settings would be helpful.

Oh wait I haven't talked about the folder structure have I? So it's all in a folder, and it can be called anything, let's call it `project/` and...

I'll just draw a tree diagram, it's easier. 

```js
project/
|   // all the compiled HTML, CSS & JS
|   source/
|   |   config.json // general settings and stuff
|   |   global_css.json // or .css
|   |   ignore.json // a list of the pages/files not to compile to web-langs
|   |   pages/
|   |   |   // all the pages that are in markdown, json, and things like that
|   |   assets/
|   |   |   // pictures, audio, videos, gifs, things like that
|   |   plugins/
|   |   |   // I might be overthinking it again
```

## Conclusion

Yeah this looks like its a lot of small projects - but I'll see how this goes. I might need to trim things down as I need to. Here are my current plans for it:
- [ ] Folder manipulation in browser 
  - [ ] Uploading `50%`
    - [x] Click to upload
    - [ ] Drag and Drop
  - [x] Reading
  - [ ] Writing
  - [ ] Downloading again (might need `.zip` for this) 
- [ ] Markdown to HTML compiler
- [ ] Custom JSON to CSS compiler
  - [ ] Static CSS 
  - [ ] Precompiled CSS
- [ ] Config options that could be helpful
- [x] Eat lunch

If you have any suggestions for how I can improve this - I'd really appreciate them!
Please feel free to open an issue explaining what could work and I'll give it a go!
