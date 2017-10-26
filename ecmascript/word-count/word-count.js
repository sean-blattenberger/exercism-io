export default class Words {
  count(str) {
    const totalCount = {};
    // const sanitized = str.toLowerCase().replace(/[\s\t\n]+/g, ' ').trim().split(' ');
    const sanitized = str.toLowerCase().match(/[^\s]+/g)
    sanitized.forEach((word) => {
      totalCount.hasOwnProperty(word) ? totalCount[word]++ : (totalCount[word] = 1);
    });
    return totalCount;
  }
}
