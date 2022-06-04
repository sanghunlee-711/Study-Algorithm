/*
pseudo 
in memory라는 제약 사항 없으므로 메서드 갈기자
*/
var reverseWords = function(s) {
    return s.split(" ").map((el)=> el.split("").reverse().join("")).join(" ");
};