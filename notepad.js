goog.provide('tutorial.notepad.Note');

goog.require('goog.dom');
goog.require('goog.ui.Zippy');

/**
 * Manages the data and interface for a single note.
 */
tutorial.notepad.Note = function(title, content, noteContainer) {
  this.title = title;
  this.content = content;
  this.parent = noteContainer;
};

/**
 * Creates the DOM structure for the note and adds it to the document.
 */
tutorial.notepad.Note.prototype.makeNoteDom = function() {
  // Create DOM structure to represent the note.
  this.headerElement = goog.dom.createDom(
    goog.dom.TagName.DIV,
    { 'style': 'background-color:#EEE' },
    this.title);
  this.contentElement = goog.dom.createDom(goog.dom.TagName.DIV, null, this.content);
  var newNote = goog.dom.createDom(goog.dom.TagName.DIV, null, this.headerElement, this.contentElement);

  goog.dom.appendChild(this.parent, newNote);

  return new goog.ui.Zippy(this.headerElement, this.contentElement);
};

/**
 * Iterates over a list of note data objects, creates a Note instance
 * for each one, and tells the instance to build its DOM structure.
 */
tutorial.notepad.makeNotes = function(data, noteContainer) {
  var notes = [];
  for (var i = 0; i < data.length; i++) {
    var note =
      new tutorial.notepad.Note(
        data[i].title,
        data[i].content,
        noteContainer);
    notes.push(note);
    note.makeNoteDom();
  }
  return notes;
};