const getPageRules = (firstSection = "") =>
  firstSection.split("\r\n").reduce((map, rule) => {
    const [page1, page2] = rule.split("|").map((string) => +string);
    if (!map.has(page1)) map.set(page1, []);
    const pageValue = map.get(page1);
    pageValue.push(page2);
    map.set(page1, pageValue);
    return map;
  }, new Map());

const getReorderedUpdates = (updatesInIncorrectOrder = [], pageRules) =>
  updatesInIncorrectOrder.map(({ pages }) => {
    pages.sort((pageFirst, pageSecond) => {
      const pageRule = pageRules.get(pageFirst) || [];
      const validPageIndex = pageRule.indexOf(pageSecond);
      if (validPageIndex === -1) return 1;
      return -1;
    });
    const middlePage = pages[Math.floor(pages.length / 2)];
    return { pages, middlePage };
  });

const getUpdates = (secondSection = "") =>
  secondSection.split("\r\n").map((string) => {
    const pages = string.split(",").map((string) => +string);
    const middlePage = pages[Math.floor(pages.length / 2)];
    return { pages, middlePage };
  });

const getUpdatesInRightOrder = (updates = [], pageRules) =>
  updates.filter(({ pages }) => {
    let inRightOrder = true;
    for (let pageIndex = 1; pageIndex < pages.length; pageIndex++) {
      const pageFirst = pages[pageIndex - 1];
      const pageSecond = pages[pageIndex];
      const pageRule = pageRules.get(pageFirst) || [];
      const validPageIndex = pageRule.indexOf(pageSecond);
      if (validPageIndex === -1) {
        inRightOrder = false;
        break;
      }
    }
    return inRightOrder;
  });

const getUpdatesInIncorrectOrder = (updates = [], pageRules) =>
  updates.filter(({ pages }) => {
    let inRightOrder = true;
    for (let pageIndex = 1; pageIndex < pages.length; pageIndex++) {
      const pageFirst = pages[pageIndex - 1];
      const pageSecond = pages[pageIndex];
      const pageRule = pageRules.get(pageFirst) || [];
      const validPageIndex = pageRule.indexOf(pageSecond);
      if (validPageIndex === -1) {
        inRightOrder = false;
        break;
      }
    }
    return !inRightOrder;
  });

export const partOne = (input = "") => {
  const [firstSection, secondSection] = input.split("\r\n\r\n");
  const pageRules = getPageRules(firstSection);
  const updates = getUpdates(secondSection);
  const updatesInRightOrder = getUpdatesInRightOrder(updates, pageRules);

  const sumOfMiddlePages = updatesInRightOrder.reduce(
    (total, { middlePage }) => total + middlePage,
    0
  );

  return sumOfMiddlePages;
};

export const partTwo = (input = "") => {
  const [firstSection, secondSection] = input.split("\r\n\r\n");
  const pageRules = getPageRules(firstSection);
  const updates = getUpdates(secondSection);
  const updatesInIncorrectOrder = getUpdatesInIncorrectOrder(
    updates,
    pageRules
  );
  const updatesReordered = getReorderedUpdates(
    updatesInIncorrectOrder,
    pageRules
  );

  const sumOfMiddlePages = updatesReordered.reduce(
    (total, { middlePage }) => total + middlePage,
    0
  );

  return sumOfMiddlePages;
};
