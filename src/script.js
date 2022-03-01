function sendEmail() {
  Email.send({
    Host: "smtp.yourisp.com",
    Username: "username",
    Password: "password",
    To: "email",
    From: document.getElementById("SenderEmail").value,
    Subject: "jiakjiak Contact Enquiry",
    Body:
      "Name: " + document.getElementById("senderName").value <
      br >
      +"Email: " + document.getElementById("senderEmail").value <
      br >
      +"Message: " + document.getElementById("senderMessage").value,
  }).then((message) => alert("Message sent!"));
}
