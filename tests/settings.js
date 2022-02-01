describe("Change password", function () {
  it("Not the good password", function (browser) {
    browser
      .url(`${browser.launch_url}/login`)
      .setValue("input[type=email]", browser.globals.email)
      .setValue("input[type=password]", browser.globals.password)
      .click("button[type=submit]")
      .assert.urlEquals('http://localhost:3000/app/home')
      .url('http://localhost:3000/app/settings/password')
      .useXpath()
      .setValue('//*[@id="currentPassword"]', 'notTheGoodPassword')
      .setValue('//*[@id="newPassword"]', 'notTheGoodPassword')
      .click('//*[@id="root"]/div[2]/div/main/div/div[2]/div[2]/div[1]/form/div[2]/button')
      .useCss()
      .assert.containsText('.Toastify__toast-body > div:nth-child(2)', 'Mot de passe faux')
      .end()
  });

  it("A new password too short", function (browser) {
    browser
      .url(`${browser.launch_url}/login`)
      .setValue("input[type=email]", browser.globals.email)
      .setValue("input[type=password]", browser.globals.password)
      .click("button[type=submit]")
      .assert.urlEquals('http://localhost:3000/app/home')
      .url('http://localhost:3000/app/settings/password')
      .useXpath()
      .setValue('//*[@id="currentPassword"]', browser.globals.password)
      .setValue('//*[@id="newPassword"]', 'p')
      .click('//*[@id="root"]/div[2]/div/main/div/div[2]/div[2]/div[1]/form/div[2]/button')
      .assert.containsText('//*[@id="root"]/div[2]/div/main/div/div[2]/div[2]/div[1]/form/div[1]/div[2]/div/div[2]', 'Ton mot de passe dpot faire plus de 8 caractères')
      .end()
  });

  it("A new password too short", function (browser) {
    browser
      .url(`${browser.launch_url}/login`)
      .setValue("input[type=email]", browser.globals.email)
      .setValue("input[type=password]", browser.globals.password)
      .click("button[type=submit]")
      .assert.urlEquals('http://localhost:3000/app/home')
      .url('http://localhost:3000/app/settings/password')
      .useXpath()
      .setValue('//*[@id="currentPassword"]', browser.globals.password)
      .setValue('//*[@id="newPassword"]', 'password')
      .click('//*[@id="root"]/div[2]/div/main/div/div[2]/div[2]/div[1]/form/div[2]/button')
      .useCss()
      .assert.containsText('.Toastify__toast-body > div:nth-child(2)', 'Mot de passe modifié avec succès')
      .end()
  });
});