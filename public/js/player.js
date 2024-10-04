const form = document.querySelector(
  "#add-player-form"
);

// Submit new post
async function addPlayer(e) {
  console.log("running");
  e.preventDefault();
  const formData = new FormData(this);
  const formDataName = formData.get("name");

  console.log(formData);

  try {
    const res = await fetch(
      "http://localhost:8000/api/players",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formDataName }),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to add post");
    }

    await res.json();
  } catch (error) {
    console.error("Error adding player");
  }
}

// Event listeners
form.addEventListener("submit", addPlayer);
