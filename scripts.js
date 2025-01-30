const newNoteBtn = document.querySelector(".add-btn");

const addNote = () => {
	const note = document.createElement("article");
	note.classList.add("note");

	note.innerHTML = `
        <div class="note-btns">
			<button class="edit-btn">
				<i class="fa-solid fa-pen-to-square"></i>
			</button>
			<button class="delete-btn">
				<i class="fa-solid fa-trash-can"></i>
			</button>
		</div>
		<p class="note-text">
			New Note
		</p>
		<textarea class="note-edit hidden"></textarea>
        `;

	document.querySelector("main").appendChild(note);
};

newNoteBtn.addEventListener("click", addNote);
