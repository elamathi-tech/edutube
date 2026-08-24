const menuButton = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", function(){
  mobileMenu.classList.toggle("hidden");
});


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


const themeBtns = document.querySelectorAll("#theme-toggle, #theme-toggle-mobile");

function applyTheme(isDark) {
    document.body.classList.toggle("bg-gray-900", isDark);
    document.body.classList.toggle("text-white", isDark);
    document.body.classList.toggle("bg-gray-50", !isDark);
    document.body.classList.toggle("text-gray-800", !isDark);

    const nav = document.querySelector("nav");
    if (nav) {
        nav.classList.toggle("bg-gray-900", isDark);
        nav.classList.toggle("bg-white", !isDark);
    }
}

applyTheme(localStorage.getItem("theme") === "dark");




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


themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const dark = !document.body.classList.contains("bg-gray-900");
        applyTheme(dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    });
});


function addToWatchlist(course) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  const alreadyExists = watchlist.some(item => item.id === course.id);

  if (!alreadyExists) {
    watchlist.push(course);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    alert("Added to Watchlist ❤️");
  } else {
    alert("Course already in Watchlist.");
  }
}



const watchlistBtn = document.getElementById("watchlist-btn");

watchlistBtn?.addEventListener("click", () => {
    addToWatchlist({
        id: "html-fundamentals",
        title: "Introduction to HTML & CSS",
        instructor: "EduTube Instructor",
        category: "HTML",
        duration: 130,
        difficulty: "Beginner",
        thumbnail: "../assets/images/html.svg",
        description: "Learn the fundamentals of HTML and CSS."
    });
});