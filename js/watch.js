const addNoteButton = document.getElementById("addNoteButton");
const notesContainer = document.getElementById("notesContainer");
const noNotes = document.getElementById("noNotes");

let notes = [];

function displayNotes() {
  notesContainer.innerHTML="";

  if(notes.length === 0){
    noNotes.classList.remove("hidden");
    notesContainer.appendChild(noNotes);
    return;
  }

  noNotes.classList.add("hidden");
  notes.forEach(function(note, index){
    const noteCard = document.createElement("div");
    noteCard.className = "border border-gray-200 rounded-lg p-4";

    noteCard.innerHTML = `
      <div class="flex items-start justify-between gap-4">
        <p class="text-gray-700 flex-1">
          ${note}
        </p>

        <div class="flex gap-2">
          <button type="button" class="text-sm text-indigo-600 hover:underline" onclick="editNote(${index})">
             Edit
          </button>

          <button type="button" class="text-sm text-indigo-600 hover:underline" onclick="deleteNote(${index})">
             Delete
          </button>
          
        </div>
      </div>
      `;

      notesContainer.appendChild(noteCard);
  });
}

addNoteButton.addEventListener("click", function(){
  const note = prompt("Enter your note:");
  if(note && note.trim() !== ""){
    notes.push(note.trim());
    displayNotes();
  }
});

function editNote(index){
  const updatedNote = prompt("Edit your note:", notes[index]);

  if(updatedNote && updatedNote.trim() !== ""){
    notes[index] = updatedNote.trim();
    displayNotes();
  }
}

function deleteNote(index){
  notes.splice(index, 1);
  displayNotes();
}

displayNotes();