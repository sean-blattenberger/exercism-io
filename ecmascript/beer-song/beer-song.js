export default class Beer {
  constructor(beers) {
    this.beers = beers;
  }
  sing() {
    let beer = this.beers;
    const lastLine = 'Go to the store and buy some more, 99 bottles of beer on the wall';

    while (beer >= 0) {
      const verse = `${beer == 0 ? 'No more' : beer} ${beer == 1
        ? 'bottle'
        : 'bottles'} of beer on the wall, ${beer == 0 ? 'no more' : beer} ${beer == 1
        ? 'bottle'
        : 'bottles'} of beer.
${beer == 0
        ? lastLine
        : `Take ${beer == 1 ? 'it' : 'one'} down and pass it around, ${beer <= 1
            ? 'no more'
            : beer - 1} ${beer - 1 == 1 ? 'bottle' : 'bottles'} of beer on the wall`}.`;
      console.log(`${verse}\n`);
      beer--;
    }
  }
}
/*
var beer = 99;
var lastLine = 'Go to the store and buy some more, 99 bottles of beer on the wall'

while(beer>=0) {
var verse = `${beer == 0 ? 'No more' : beer} ${beer == 1 ? 'bottle' : 'bottles'} of beer on the wall, ${beer == 0 ? 'no more' : beer} ${beer == 1 ? 'bottle' : 'bottles'} of beer.
${beer == 0 ? lastLine : `Take ${beer == 1 ? 'it' : 'one'} down and pass it around, ${beer <= 1 ? 'no more' : beer - 1} ${(beer - 1 == 1) ? 'bottle' : 'bottles'} of beer on the wall`}.`
  console.log(verse + '\n')
  beer--;
}
*/
