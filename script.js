$("document").ready(function () {
    function moveRight() {
        $("#slider ul li:last-child").prependTo("#slider ul");
    }
    function moveLeft() {
        $("#slider ul li:first-child").appendTo("#slider ul");
    }
    //when Click
    $("a.next").click(function () {
        moveRight();
    })
    $("a.back").click(function () {
        moveLeft();
    })
});