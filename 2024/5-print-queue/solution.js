export const partOne = (input = "") => {
  const [firstSection, secondSection] = input.split("\r\n\r\n");
  const pageRules = firstSection.split("\r\n").reduce((map, rule) => {
    const [page1, page2] = rule.split("|").map((string) => +string);
    if (!map.has(page1)) map.set(page1, []);
    const pageValue = map.get(page1);
    pageValue.push(page2);
    map.set(page1, pageValue);
    return map;
  }, new Map());

  const updates = secondSection.split("\r\n").map((string) => {
    const pages = string.split(",").map((string) => +string);
    const middlePage = pages[Math.floor(pages.length / 2)];
    return { pages, middlePage };
  });

  const updatesInRightOrder = updates.filter(({ pages, middlePage }) => {
    let inRightOrder = true;
    for (let pageIndex = 1; pageIndex < pages.length; pageIndex++) {
      const pageFirst = pages[pageIndex - 1];
      const pageSecond = pages[pageIndex];
      const pageRule = pageRules.get(pageFirst) || [];
      const validPageIndex = pageRule.indexOf(pageSecond);
      //   console.log({ pageFirst, pageSecond, pageRule, validPageIndex });
      if (validPageIndex === -1) {
        inRightOrder = false;
        break;
      }
    }
    return inRightOrder;
  });

  const sumOfMiddlePages = updatesInRightOrder.reduce(
    (total, { middlePage }) => total + middlePage,
    0
  );

  return sumOfMiddlePages;
};

export const partTwo = (input = "") => {};
