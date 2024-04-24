// duration of scroll animation
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
// get items dimensions
var itemsLength = $('.item').length;
var itemSize = $('.item').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getMenuWrapperSize = function() {
    return $('.menu-wrapper').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
    menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function() {
    return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
    return $('.menu').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.menu').on('scroll', function() {

    // get how much of menu is invisible
    menuInvisibleSize = menuSize - menuWrapperSize;
    // get how much have we scrolled so far
    var menuPosition = getMenuPosition();

    var menuEndOffset = menuInvisibleSize - paddleMargin;

    // show & hide the paddles 
    // depending on scroll position
    if (menuPosition <= paddleMargin) {
        $(leftPaddle).addClass(' opacity-0');
        $(rightPaddle).removeClass(' opacity-0');
    } else if (menuPosition < menuEndOffset) {
        // show both paddles in the middle
        $(leftPaddle).removeClass(' opacity-0');
        $(rightPaddle).removeClass(' opacity-0');
    } else if (menuPosition >= menuEndOffset) {
        $(leftPaddle).removeClass(' opacity-0');
        $(rightPaddle).addClass(' opacity-0');
    }
});

// scroll to left
$(rightPaddle).on('click', function() {
    if ($(rightPaddle).css('opacity') == 0)
        return

    if (menuInvisibleSize <= 0)
        return

    $('.menu').animate({ scrollLeft: menuInvisibleSize }, scrollDuration);
});

// scroll to right
$(leftPaddle).on('click', function() {

    if ($(leftPaddle).css('opacity') == 0)
        return

    if (menuInvisibleSize <= 0)
        return

    $('.menu').animate({ scrollLeft: '0' }, scrollDuration);
});

if (menuInvisibleSize <= 0) {
    $(rightPaddle).css('opacity', 0)
    $(leftPaddle).css('opacity', 0)
}



const subAccordionHeader = document.querySelectorAll(".sub-accordion-header");
subAccordionHeader.forEach((header) => {
    header.addEventListener("click", function() {

        const accordionContent = header.parentElement.querySelector(".sub-accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;
        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
            accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
            header.querySelector(".fas").classList.remove("fa-plus");
            header.querySelector(".fas").classList.add("fa-minus");
        } else {
            accordionContent.style.maxHeight = "0px";
            header.querySelector(".fas").classList.add("fa-plus");
            header.querySelector(".fas").classList.remove("fa-minus");
        }
    });
});

const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
    header.addEventListener("click", function() {

        const accordionContent = header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;
        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
            accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
            header.querySelector(".fas").classList.remove("fa-chevron-down");
            header.querySelector(".fas").classList.add("fa-chevron-up");
        } else {
            accordionContent.style.maxHeight = "0px";
            header.querySelector(".fas").classList.add("fa-chevron-down");
            header.querySelector(".fas").classList.remove("fa-chevron-up");
        }
    });
});