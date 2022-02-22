// import Printer from './printer.js'
import HashTagPrinter from "./hashTagPrinter.js"

// let printer = new Printer();
// printer.pushText("Hello");
// printer.pushText("Test");
// printer.pushText("Pattern");

let printer = new HashTagPrinter(); // HashTagPrinter의 printer로 교체
printer.pushText("Hello");
printer.pushText("Test");
printer.pushText("Pattern");

let result = printer.print(); // printer가 명세가 맞지 않아 에러가 발생
console.log(result)