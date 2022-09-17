/**
 * The program calculates energy in joules based on the mass inputed
 * by the user
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-09-16
 */

import promptSync from "prompt-sync";

const prompt = promptSync();

const speed = 2.998 * 10 ** 8;

const userInput = prompt("Enter a mass:");

const mass = parseFloat(userInput);

if (mass >= 0) {
  const energy = mass * speed ** 2;
  console.log(`\nThe energy in (J) is: ${energy}`);
} else {
  console.log("The input is not valid");
}
console.log("\nDone.");
