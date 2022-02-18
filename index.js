(function copyrightYear() {
    const today = new Date();
    const thisYear = today.getFullYear();
    let thisYearToStr = thisYear.toString();

    return document.getElementById("year").innerHTML = thisYearToStr;
})();
