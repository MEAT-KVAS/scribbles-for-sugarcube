// Simplest gender template for SugarCube 2.37.3
// By MEAT-KVAS https://github.com/MEAT-KVAS/scribbles-for-sugarcube
//
Template.add(["he", "He"], function () { 
    if (State.variables.chargender === true){ 
	    var aaa = ("he");
	    return this.name === "He" ? aaa.toUpperFirst() : aaa;}
    else {
        var aaa = ("she");
	    return this.name === "He" ? aaa.toUpperFirst() : aaa;
    }
});

Template.add(["him", "Him"], function () {
    if (State.variables.chargender === true){
	    var aaa = ("him");
	    return this.name === "Him" ? aaa.toUpperFirst() : aaa;}
    else {
        var aaa = ("her");
	    return this.name === "Him" ? aaa.toUpperFirst() : aaa;
    }
});

Template.add(["his_", "His_"], function () {
    if (State.variables.chargender === true){
	    var aaa = ("his");
	    return this.name === "His_" ? aaa.toUpperFirst() : aaa;}
    else {
        var aaa = ("hers");
	    return this.name === "His_" ? aaa.toUpperFirst() : aaa;
    }
});

Template.add(["his", "His"], function () {
    if (State.variables.chargender === true){
	    var aaa = ("his");
	    return this.name === "His" ? aaa.toUpperFirst() : aaa;}
    else {
        var aaa = ("her");
	    return this.name === "His" ? aaa.toUpperFirst() : aaa;
    }
});

Template.add(["himself", "Himself"], function () {
    if (State.variables.chargender === true){
	    var aaa = ("himself");
	    return this.name === "Himself" ? aaa.toUpperFirst() : aaa;}
    else {
        var aaa = ("herself");
	    return this.name === "Himself" ? aaa.toUpperFirst() : aaa;
    }
});
//
//End of simplest gender template
