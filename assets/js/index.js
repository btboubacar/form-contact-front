document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;

    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;

    const message = document.querySelector("#message").value;

    const dataToSend = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };
    console.log(dataToSend);
    try {
      const response = await axios.post(
        //"http://localhost:3000/form",
        "https://site--form-contact-backend--25428jw7g85y.code.run/form",
        dataToSend
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  });
});
