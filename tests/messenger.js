describe("Messenger", function () {
  it("Send simple message", function (browser) {
    browser
      .url(`${browser.launch_url}/login`)
      .setValue("input[type=email]", browser.globals.email)
      .setValue("input[type=password]", browser.globals.password)
      .click("button[type=submit]")
      .assert.urlEquals('http://localhost:3000/app/home')
      .url('http://localhost:3000/app/messenger/61f7d34a2124597fe381cbda')
      .setValue("input[type=text]", 'Hello World from nightWatch')
      .useXpath()
      .click('//*[@id="root"]/div[2]/div/main/div/div/div/div[2]/div/div[3]/form/div/div')
      .useXpath()
      .waitForElementPresent('/html/body/div/div[2]/div/main/div/div/div/div[1]/div/div[4]/div[1]/div[1]/div/div/div[2]/div[2]')
      .assert.containsText('/html/body/div/div[2]/div/main/div/div/div/div[1]/div/div[4]/div[1]/div[1]/div/div/div[2]/div[2]', 'Hello World from nig...')
      .end();
  });

  it("Check if message is received", function (browser) {
    browser
      .url(`${browser.launch_url}/login`)
      .setValue("input[type=email]", 'celine.lefort@gmail.comqsqdkj')
      .setValue("input[type=password]", browser.globals.password)
      .click("button[type=submit]")
      .assert.urlEquals('http://localhost:3000/app/home')
      .url('http://localhost:3000/app/messenger/61f7d34a2124597fe381cbda')
      .useXpath()
      .waitForElementPresent('/html/body/div/div[2]/div/main/div/div/div/div[1]/div/div[4]/div[1]/div[1]/div/div/div[2]/div[2]')
      .assert.containsText('/html/body/div/div[2]/div/main/div/div/div/div[1]/div/div[4]/div[1]/div[1]/div/div/div[2]/div[2]', 'Hello World from nig...')
      .end();
  });
});
