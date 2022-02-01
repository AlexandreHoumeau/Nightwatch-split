describe("Login", function () {
  it("With good values", function (browser) {
    browser
      .url(`${browser.launch_url}/login`)
      .setValue("input[type=email]", browser.globals.email)
      .setValue("input[type=password]", browser.globals.password)
      .click("button[type=submit]")
      .assert.urlEquals("http://localhost:3000/app/home")
      .end();
  });

  it("With wrong email", function (browser) {
    browser
    .url(`${browser.launch_url}/login`)
    .setValue("input[type=email]", 'alexandre.houmeaugmail.com')
    .setValue("input[type=password]", browser.globals.password)
    .assert.containsText('.text-red-500', 'Email invalide')
    .end()
  })

  it("With non-existent account", function (browser) {
    browser
    .url(`${browser.launch_url}/login`)
    .setValue("input[type=email]", 'not-an-account@gmail.com')
    .setValue("input[type=password]", browser.globals.password)
    .click("button[type=submit]")
    .assert.containsText('.Toastify__toast-body > div:nth-child(2)', "Cet email n'existe pas dans notre base")
    .end();
  })


  it("With wrong password", function (browser) {
    browser
    .url(`${browser.launch_url}/login`)
    .setValue("input[type=email]", browser.globals.email)
    .setValue("input[type=password]", 'wrongPassword')
    .click("button[type=submit]")
    .assert.containsText('.Toastify__toast-body > div:nth-child(2)', "Erreur de mot de passe")
    .end();
  })
});
