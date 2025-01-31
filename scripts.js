const newNoteBtn = document.querySelector(".add-btn");

const storedNotes = JSON.parse(localStorage.getItem("notes"));

const addNote = (text = "") => {
	const note = document.createElement("article");
	note.classList.add("note");

	note.innerHTML = `
        <div class="note-btns">
			<button class="edit-btn">
				<i class="fa-solid fa-pen-to-square"></i>
			</button>
            <button class="save-btn hidden">
                <i class="fa-solid fa-floppy-disk"></i>
            </button>
			<button class="delete-btn">
				<i class="fa-solid fa-trash-can"></i>
			</button>
		</div>
		<p class="note-text">
			${text ? `${text}` : "New Note"}
		</p>
		<textarea class="hidden"></textarea>
        `;

	const editBtn = note.querySelector(".edit-btn");
	const saveBtn = note.querySelector(".save-btn");
	const deleteBtn = note.querySelector(".delete-btn");
	const noteText = note.querySelector(".note-text");
	const textarea = note.querySelector("textarea");

	editBtn.addEventListener("click", () => {
		editBtn.classList.toggle("hidden");
		saveBtn.classList.toggle("hidden");
		noteText.classList.toggle("hidden");
		textarea.classList.toggle("hidden");
		textarea.value = noteText.textContent.trim();
	});

	saveBtn.addEventListener("click", () => {
		editBtn.classList.toggle("hidden");
		saveBtn.classList.toggle("hidden");
		noteText.classList.toggle("hidden");
		textarea.classList.toggle("hidden");
		noteText.textContent = textarea.value;
		updateLocalStorage();
	});

	deleteBtn.addEventListener("click", () => {
		note.remove();
		updateLocalStorage();
	});

	document.querySelector("main").appendChild(note);
};

if (storedNotes) {
	storedNotes.forEach((note) => addNote(note));
}

newNoteBtn.addEventListener("click", () => addNote());

const updateLocalStorage = () => {
	const notesText = document.querySelectorAll(".note-text");
	const notes = [];

	notesText.forEach((note) => notes.push(note.textContent.trim()));

	localStorage.setItem("notes", JSON.stringify(notes));
};
