export let formatPrice = function(cents) {
  return '$' + ( (cents / 100).toFixed(2).replace(/\b(?=(\d{3})+(?!\d))/g, ",") );
};

export let rando = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

export let slugify = function(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');             // Trime - from end of text
};

export let getFunName = function() {
  var adjectives = [
    'adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous',
    'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint',
    'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy',
    'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy',
    'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky',
    'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'
  ];
  var nouns = [
    'women', 'men', 'children', 'teeth', 'feet', 'people', 'leaves', 'mice',
    'geese', 'halves', 'knives', 'wives', 'lives', 'elves', 'loaves',
    'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi', 'nuclei', 'syllabuses',
    'analyses', 'diagnoses', 'oases', 'theses', 'crises', 'phenomena',
    'criteria', 'data'
  ];
  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
};
