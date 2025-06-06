function start(){
    console.log("App started");
    stop();
}

function stop(){
    console.log("App stopped");
}

function init(){
    console.log("App initialized");
    start();
}

window.onload = init; // this function is called when the window loads. it initializes the application by calling the init function
//this awaits for the DOM to be fully loaded before running init. It waits until the html and css are fully loaded before running the init function
//if you add the parenthesis after the init function, it is saying you want it executed imediately.