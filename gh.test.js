let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
  await page.goto("https://github.com/team");
 });

  test("The h1 header content'", async () => {
    await jest.setTimeout(30000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  });

  test("The first link attribute", async () => {
    await jest.setTimeout(60000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await await jest.setTimeout(90000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free");
  });
});

test("The page contains Get started button", async () => {
  await page.goto("https://github.com/notifications");
  const cssButton = "summary[aria-label='Get started clearing your notifications']";
  const actual = await page.$eval(cssButton, link => link.textContent);
  expect(actual).toContain("Get started");
});

test("The h4 header content'", async () => {
  await page.goto("https://github.com/marketplace");
  const comboBox = 
  await page.$(".fgColor-default.line-clamp-1.marketplace-common-module__marketplace-item-link--jrIHf[href='/marketplace/models/azure-openai/gpt-4o-mini']");
  await comboBox.click;
  await page.waitForSelector('h4');
  const title = await page.title();
  expect(title).toEqual("OpenAI GPT-4o mini");
}); 

test("The first link attribute page Pull Requests", async () => {
  await page.goto("https://github.com/pulls");
   const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
});