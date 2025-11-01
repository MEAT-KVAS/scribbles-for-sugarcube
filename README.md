# scribbles-for-sugarcube
Some things for [SugarCube](https://github.com/tmedwards/sugarcube-2) 2.37.3 maded by an inexperienced person because I did not find a suitable (for my game) ready-made solution. Perhaps they will be useful to others as well.


----
## How to install

- For Twine: copypaste code from .js file into your story script passage.
- For Tweego: place the .js file into your source folder (or copypaste to an existed .js).

----
## List of things

- [Simplest gender template](#anchor-simplegender)

----
<span id="anchor-simplegender"></span>
### simplegender
Simplest gender template [./simplegender.js](./simplegender.js)

Basic usage: just type `?he`, `?him`, `?his`, `?himself` and watch as it magically transforms into a male or female version depending on the character's gender variable. Uppercasing is included.

Note: the `chargender` in `State.variables.chargender` is your `$chargender` in StoryInit passage, it should be boolean (true/false, where "true" is male and "false" is female).

You can have as much swappable characters as you wish, but each of them requires their own set of templates if you want them to be swappable independently of each another, just copy-paste the template block and dont forget to change variables.

If you have more than one swappable char, in the next template block you should add something unique to "he", as well as another State.variable and rename this aaa-var. For example, you have swappable Player Char and Char 2, so the Player Char goes with `["he", "He"]`, `State.variables.chargender` and `var aaa`, and the Char 2 goes with `["c2he", "C2he"]`, `State.variables.char2gender` and `var bbb`, and so on, you got it.

Tip: it works perfectly inside the link macro, if you want to use it in link titles, wrap it with `<<link "title" "passage">><</link>>` instead of `[[]]`

You can also create an extra templates for any word you need for your character, like this:
```
Template.add(["boy", "Boy"], function () {
   if (State.variables.chargender === true){
	    var aaa = ("boy");
	    return this.name === "Boy" ? aaa.toUpperFirst() : aaa;}
    else {
      var aaa = ("girl");
	    return this.name === "Boy" ? aaa.toUpperFirst() : aaa;
    }
});
```
...or do something more complicated using `else-if` construction with a numerical variable:
```
Template.add(["hair", "Hair"], function () { 
    if (State.variables.hair === 1){ 
	    var ccc = ("blonde");
	    return this.name === "Hair" ? ccc.toUpperFirst() : ccc;
    }
    else if (State.variables.hair === 2){
        var ccc = ("brown");
	    return this.name === "Hair" ? ccc.toUpperFirst() : ccc;
    }
    else {
        var ccc = ("black");
	    return this.name === "Hair" ? ccc.toUpperFirst() : ccc;
    }
});
```

