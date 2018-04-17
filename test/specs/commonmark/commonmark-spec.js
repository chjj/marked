var tester = require('../marked-tester.js');
var cmSpec = require('./commonmark.0.28.json');

var testOptions = {
  gfm: false,
  pedantic: false,
  tables: false,
  headerIds: false,
  xhtml: true,
  langPrefix: 'language-'
}

describe('CommonMark 0.28 Tabs', function() {
  var section = 'Tabs';

  // These examples probably should pass but don't for some reason.
  // This is the easiest way to demonstrate limitations  or defects
  // within Marked. Toggle comments for next two lines to see which examples
  // are known failures. Note: If all arrays are empty, it means Marked is
  // 100% compliant with that section of the given specification.
  //
  // var shouldPassButFails = [];
  var shouldPassButFails = [1, 2, 3, 7];

  // Identifies examples that the Marked core team has determined beyond
  // the ability or desire to correct; thereby, implicitly requesting
  // outside help and assistance.
  var willNotBeAttemptedByCoreTeam = [];

  // Combine known failures and skips.
  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    // Run test.
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Precedence', function() {
  var section = 'Precedence';

  // var shouldPassButFails = [];
  var shouldPassButFails = [];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Thematic breaks', function() {
  var section = 'Thematic breaks';

  // var shouldPassButFails = [];
  var shouldPassButFails = [19];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 ATX headings', function() {
  var section = 'ATX headings';

  var shouldPassButFails = [];
  var shouldPassButFails = [33, 34, 40, 45, 46, 49];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Setext headings', function() {
  var section = 'Setext headings';

  // var shouldPassButFails = [];
  var shouldPassButFails = [51, 52, 56, 62, 64];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Indented code blocks', function() {
  var section = 'Indented code blocks';

  // var shouldPassButFails = [];
  var shouldPassButFails = [82];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Fenced code blocks', function() {
  var section = 'Fenced code blocks';

  var shouldPassButFails = [];
  var shouldPassButFails = [88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 109, 110, 111, 112, 113, 115];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 HTML blocks', function() {
  var section = 'HTML blocks';

  var shouldPassButFails = [];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Link reference definitions', function() {
  var section = 'Link reference definitions';

  // var shouldPassButFails = [];
  var shouldPassButFails = [167, 177];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Paragraphs', function() {
  var section = 'Paragraphs';

  // var shouldPassButFails = [];
  var shouldPassButFails = [185, 186];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Blank lines', function() {
  var section = 'Blank lines';

  // var shouldPassButFails = [];
  var shouldPassButFails = [];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Block quotes', function() {
  var section = 'Block quotes';

  // var shouldPassButFails = [];
  var shouldPassButFails = [198, 199, 200, 201];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 List items', function() {
  var section = 'List items';

  // var shouldPassButFails = [];
  var shouldPassButFails = [218, 220, 225, 226, 227, 229, 236, 237, 239, 241, 243, 244, 246, 247, 258, 259, 260];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Lists', function() {
  var section = 'Lists';

  // var shouldPassButFails = [];
  var shouldPassButFails = [264, 265, 266, 268, 269, 270, 273, 274, 275, 276, 277, 278, 279, 280, 282, 285];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Inlines', function() {
  var section = 'Inlines';

  // var shouldPassButFails = [];
  var shouldPassButFails = [];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Backslash escapes', function() {
  var section = 'Backslash escapes';

  // var shouldPassButFails = [];
  var shouldPassButFails = [290, 291, 293, 296, 300, 301];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Entity and numeric character references', function() {
  var section = 'Entity and numeric character references';

  // var shouldPassButFails = [];
  var shouldPassButFails = [311, 309, 310];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Code spans', function() {
  var section = 'Code spans';

  // var shouldPassButFails = [];
  var shouldPassButFails = [316, 320, 322, 323, 328, 330];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Emphasis and strong emphasis', function() {
  var section = 'Emphasis and strong emphasis';

  // var shouldPassButFails = [];
  var shouldPassButFails = [333, 334, 342, 348, 349, 352, 353, 354, 355, 356, 360, 368, 369, 371, 372, 378, 380, 381, 382, 387, 388, 392, 393, 394, 395, 396, 402, 403, 409, 416, 419, 420, 421, 422, 423, 424, 428, 431, 432, 433, 434, 435, 436, 443, 444, 445, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Links', function() {
  var section = 'Links';

  // var shouldPassButFails = [];
  var shouldPassButFails = [468, 474, 478, 483, 489, 490, 491, 492, 495, 496, 497, 499, 503, 504, 505, 507, 508, 509, 523, 535];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Images', function() {
  var section = 'Images';

  // var shouldPassButFails = [];
  var shouldPassButFails = [544, 545, 546, 547, 548, 556, 560];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

describe('CommonMark 0.28 Autolinks', function() {
  var section = 'Autolinks';

  // var shouldPassButFails = [];
  var shouldPassButFails = [];

  var willNotBeAttemptedByCoreTeam = [];

  var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

  cmSpec.forEach(function(spec) {
    tester.test(spec, section, ignore, testOptions);
  });
});

// describe('CommonMark 0.28 Raw HTML', function() {
//   var section = 'Raw HTML';

//   // var shouldPassButFails = [];
//   var shouldPassButFails = [597, 598];

//   var willNotBeAttemptedByCoreTeam = [];

//   var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

//   cmSpec.forEach(function(spec) {
//     messenger.test(spec, section, ignore);
//   });
// });

// describe('CommonMark 0.28 Hard line breaks', function() {
//   var section = 'Hard line breaks';

//   // var shouldPassButFails = [];
//   var shouldPassButFails = [611, 606, 609, 613];

//   var willNotBeAttemptedByCoreTeam = [];

//   var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

//   cmSpec.forEach(function(spec) {
//     messenger.test(spec, section, ignore);
//   });
// });

// describe('CommonMark 0.28 Soft line breaks', function() {
//   var section = 'Soft line breaks';

//   // var shouldPassButFails = [];
//   var shouldPassButFails = [621];

//   var willNotBeAttemptedByCoreTeam = [];

//   var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

//   cmSpec.forEach(function(spec) {
//     messenger.test(spec, section, ignore);
//   });
// });

// describe('CommonMark 0.28 Textual content', function() {
//   var section = 'Textual content';

//   // var shouldPassButFails = [];
//   var shouldPassButFails = [];

//   var willNotBeAttemptedByCoreTeam = [];

//   var ignore = shouldPassButFails.concat(willNotBeAttemptedByCoreTeam);

//   cmSpec.forEach(function(spec) {
//     messenger.test(spec, section, ignore);
//   });
// });
