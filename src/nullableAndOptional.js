// nullable (?number) と optional (number=) の違いについて

/** * @param {?number} num */
function nullable(num) {
  console.log(num);
}

/** * @param {number=} num */
function optional(num) {
  console.log(num);
}

/** * @param {?number=} num */
function nullableAndOptional(num) {
  console.log(num);
}

nullable(1);
nullable(null);
nullable(); // NG

optional(1);
optional(null); // NG
optional();

nullableAndOptional(1);
nullableAndOptional(null);
nullableAndOptional();