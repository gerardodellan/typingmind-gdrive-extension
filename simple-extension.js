class SimpleExtension {
  constructor() {
    console.log("Simple extension initialized");
  }

  onload() {
    console.log("Simple extension loaded");
    alert("Hello from the simple extension!");
  }
}

window.TypingMindExtension = SimpleExtension;
