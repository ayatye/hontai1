document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("YOUR_SERVER_ENDPOINT_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("statusMessage").textContent =
          "お問い合わせが送信されました。";
      })
      .catch((error) => {
        document.getElementById("statusMessage").textContent =
          "送信中にエラーが発生しました。";
      });
  });
