function copyrightYear() {
    const today = new Date();
    const year = today.getFullYear();
    let yearToStr = year.toString();

    return document.getElementById("year").innerHTML = yearToStr;

}
