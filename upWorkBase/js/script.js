// header scroll
var header = document.querySelector('.navbar.navbar-fixed-top');

function onScroll(e) {
    window.scrollY >= 200 ? header.classList.add('navbar-fixed-active') : header.classList.remove('navbar-fixed-active');
}

document.addEventListener('scroll', onScroll);
// How it work header scroll
var headerWork = $(".navbar.navbar-fixed-top.ng-scope");
var headerItem = headerWork.find(".navbar-nav.navbar-bottom");

function showHeader() {
    $(".subnav-with-dropdown").css("height", "unset");
    $(".second-menu").css({ "width": "100%", "z-index": "unset", "position": "unset", "top": "100%" });
    $(".inner-wrapper").removeClass("sticks");
}

function hideHeader() {
    $(".subnav-with-dropdown").css("height", "71px");
    $(".second-menu").css({ "width": "100%", "z-index": "10", "position": "fixed", "top": "0px" });
    $(".inner-wrapper").addClass("sticks");
}

function nextAction() {

}

function prevAction() {

}

function onScrollWork(e) {
    window.scrollY >= 200 ? headerItem.css("height", "0px") : headerItem.css("height", "40px");
    window.scrollY >= 600 ? hideHeader() : showHeader();
    window.scrollY >= 1000 ? nextAction() : prevAction();
}
document.addEventListener('scroll', onScrollWork);
$(document).ready(function() {
    // Click each item
    var item = $(".sub-nav-links.nav-links").find(".ng-scope");
    $(item).click(function() {
        if ($(this).siblings().hasClass("active")) {
            $(this).siblings().removeClass("active");
        }
        $(this).toggleClass("active");
    });
    // Solutions
    $(".see-more-block").click(function() {
        $(this).addClass("d-none");
        $(this).siblings(".height-0.more-tiles-block").css("height", "auto");
    });
    $(".read-more").click(function() {
        $(this).parents(".inner-container.col-lg-10").addClass("opened");
    });
    $(".view-less").click(function() {
        $(this).parents(".inner-container.col-lg-10").removeClass("opened");
    });
    // show detail of item
    var detail = $(".item.ng-scope");;
    detail.click(function() {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).find(".content.text-short").css({ "margin": "auto", "max-height": "none" });
        } else {
            $(this).find(".content.text-short").css({ "margin": "0", "max-height": "0" });
        }
    });
    // In the footer
    $(".show-more").click(function() {
        var pointer = $(this).siblings("row").find(".col-md-3.m-sm-bottom");
        $(this).siblings(".row").find(".col-md-3.m-sm-bottom").css("display", "block");
        $(this).css("display", "none")
    });
    // Toggle footer
    $(".visitor-accordion-toggle").click(function() {
        var parentItem = $(this).parent(".hydrated");
        parentItem.toggleClass("active");
        if (parentItem.hasClass("active")) {
            $(this).siblings(".visitor-accordion-content").css("height", "auto");
        } else {
            $(this).siblings(".visitor-accordion-content").css("height", "0");
        }

    });

    // var item = $(".item.text-center")
    // $(".left.carousel-control").click(function(){
    // 	item.removeClass("active");
    // 	item.prev().addClass("active");
    // });
    // 
    // $(".right.carousel-control").click(function(){
    // 	item.removeClass("active");
    // 	item.next().addClass("active");
    // });

    // toggel Search
    $(".filters-toggle-button").click(function() {
        $(".ng-scope").toggleClass("collapse");
        $(".ng-scope").toggleClass("in");
    });

});

$(document).ready(function() {
    // Open menu
    $(".navbar-toggle").click(function() {
        $("html").toggleClass("navbar-is-open");
    });
    $(".d-lg-none").click(function() {
        $(this).toggleClass("active");
    });

    // Open Search
    $(".dropdown-toggle").click(function() {
        $(".sc-up-header-search-menu-h.sc-up-header-search-menu-s").toggleClass("open");
    });
    $("li.sc-up-header-search-menu").click(function() {
        $(this).addClass("active");
        if ($(this).siblings().hasClass("active")) {
            $(this).siblings().removeClass("active");
        }
        $(".sc-up-header-search-menu-h.sc-up-header-search-menu-s").removeClass("open");
        var search_choose = $(this).parents(".input-group-search-dropdown.input-group-navbar").siblings(".search-tracking.hydrated");
        var search_parent = search_choose.parent("form");
        console.log($(this).find("a.sc-up-header-search-menu").text());
        // ở cái chỗ đoạn text này em đung mấy cách rồi mà không được anh nom chỉ em được không ạ
        if ($(this).find("a.sc-up-header-search-menu").text() == "Jobs") {
            console.log(1212);
            search_choose.attr("tracking-label", "job_search");
            search_parent.attr("action", "/search/jobs/");
        } else if ($(this).text() == "Freelancers & Agencies") {
            search_choose.attr("tracking-label", "f1_search");
            search_parent.attr("action", "/search/profiles/")
        }
    });
});

function itemClick() {
    var val = $("a.sc-up-header-search-menu");
    console.log(val);
}