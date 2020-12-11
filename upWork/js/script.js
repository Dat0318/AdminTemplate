// header scroll
var header = document.querySelector('.navbar.navbar-fixed-top');

function onScroll(e) {
  window.scrollY >= 200 ?
    header.classList.add('navbar-fixed-active') :
    header.classList.remove('navbar-fixed-active');
}

document.addEventListener('scroll', onScroll);
// How it work header scroll
var headerWork = $('.navbar.navbar-fixed-top.ng-scope');
var headerItem = headerWork.find('.navbar-nav.navbar-bottom');

function showHeader() {
  $('.subnav-with-dropdown').css('height', 'unset');
  $('.second-menu').css({
    width: '100%',
    'z-index': 'unset',
    position: 'unset',
    top: '100%'
  });
  $('.inner-wrapper').removeClass('sticks');
}

function hideHeader() {
  $('.subnav-with-dropdown').css('height', '71px');
  $('.second-menu').css({
    width: '100%',
    'z-index': '10',
    position: 'fixed',
    top: '0px'
  });
  $('.inner-wrapper').addClass('sticks');
}

function nextAction() {}

function prevAction() {}

function onScrollWork(e) {
  window.scrollY >= 200 ?
    headerItem.css('height', '0px') :
    headerItem.css('height', '40px');
  window.scrollY >= 600 ? hideHeader() : showHeader();
  window.scrollY >= 1000 ? nextAction() : prevAction();
}
document.addEventListener('scroll', onScrollWork);
$(document).ready(function() {
  // Click each item
  var item = $('.sub-nav-links.nav-links').find('.ng-scope');
  $(item).click(function() {
    if (
      $(this)
      .siblings()
      .hasClass('active')
    ) {
      $(this)
        .siblings()
        .removeClass('active');
    }
    $(this).toggleClass('active');
  });
  // Solutions
  $('.see-more-block').click(function() {
    $(this).addClass('d-none');
    $(this)
      .siblings('.height-0.more-tiles-block')
      .css('height', 'auto');
  });
  $('.read-more').click(function() {
    $(this)
      .parents('.inner-container.col-lg-10')
      .addClass('opened');
  });
  $('.view-less').click(function() {
    $(this)
      .parents('.inner-container.col-lg-10')
      .removeClass('opened');
  });
  // show detail of item
  var detail = $('.item.ng-scope');
  detail.click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this)
        .find('.content')
        .css({ margin: 'auto', 'max-height': 'none' });
      $(this)
        .find('.content.text-short')
        .css({ margin: 'auto', 'max-height': 'none' });
    } else {
      $(this)
        .find('.content')
        .css({ margin: '0', 'max-height': '0' });
      $(this)
        .find('.content.text-short')
        .css({ margin: '0', 'max-height': '0' });
    }
  });
  // In the footer
  $('.show-more').click(function() {
    var pointer = $(this)
      .siblings('row')
      .find('.col-md-3.m-sm-bottom');
    $(this)
      .siblings('.row')
      .find('.col-md-3.m-sm-bottom')
      .css('display', 'block');
    $(this).css('display', 'none');
  });
  // Toggle footer
  $('.visitor-accordion-toggle').click(function() {
    var parentItem = $(this).parent('.hydrated');
    parentItem.toggleClass('active');
    if (parentItem.hasClass('active')) {
      $(this)
        .siblings('.visitor-accordion-content')
        .css('height', 'auto');
    } else {
      $(this)
        .siblings('.visitor-accordion-content')
        .css('height', '0');
    }
  });

  $('.d-md-inline-block.d-block.to-hide').click(function() {
    $(this)
      .parents(
        '.p-md-top.pb-20.p-md-left-right.vs-width-100.bottom-gray-light-line.v4-linear-tile'
      )
      .addClass('active visited');
  });
  $('.close-button.btn.btn-default.btn-circle.d-none.to-show').click(
    function() {
      $(this)
        .siblings('.pl-5.col-xs-8.col-sm-9.pr-0')
        .find('.registration-form-section.p-xxlg-bottom')
        .css('display', 'none');
      $(this).attr('style', 'display: none !important');
      // $(".desktop-padding-left.width-animation.animate-desktop").css("width","100%");
      $(this)
        .parents('.row.tile-id-block')
        .siblings('.desktop-padding-left.width-animation.animate-desktop')
        .css('width', '100%');
    }
  );

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
  $('.filters-toggle-button').click(function() {
    $('.ng-scope').toggleClass('collapse in');
    // $(".ng-isolate-scope").
    // $(".radio.ng-scope.collapse.in").children("ng-binding").first().attr("checked");
  });

  $('.input-group-addon.input-dropdown-arrow-icon.p-l-0').click(function() {
    $(this)
      .parents('.form-group.dropdown')
      .toggleClass('open');
  });

  $('.dropdown-menu.text-capitalize')
    .find('li')
    .click(function() {
      $(this)
        .siblings('li')
        .removeClass('active')
        .css('color', '#222)');
      $(this)
        .addClass('active')
        .css('color', 'rgb(255, 115, 0)');
    });

  $('.btn.btn-default.m-0.close-collspase').click(function() {
    $('.ng-scope').toggleClass('collapse in');
  });

  $('.btn.btn-default.dropdown-toggle.sc-up-c-dropdown-search').click(
    function() {
      $(this)
        .siblings('.dropdown-menu.transition-content.sc-up-c-dropdown-search')
        .fadeToggle();
    }
  );

  $('.inner-wrapper')
    .children('.nav-links.list-inline.font-gotham-medium')
    .children('li')
    .click(function() {
      $(this)
        .addClass('active')
        .css('color', 'rgb(255, 115, 0)');
      $(this)
        .siblings('li')
        .removeClass('active')
        .css('color', '#222)');
    });

  $('.btn.px-5.dropdown-toggle').click(function() {
    $(this)
      .parents('.input-group-btn.dropdown')
      .toggleClass('open');
  });

  $('.dropdown-menu')
    .find('li')
    .click(function() {
      $(this)
        .siblings('li')
        .find('a')
        .removeClass('active')
        .css('color', '#222');
      $(this)
        .find('a')
        .addClass('active')
        .css('color', 'rgb(255, 115, 0)');
    });

  $('.btn.btn-default.dropdown-toggle.width-lg').click(function() {
    $(this)
      .siblings('.eo-dropdown-menu')
      .css('display', 'block');
  });

  $('.btn.btn-default.dropdown-toggle.width-lg')
    .siblings('.eo-dropdown-menu')
    .find('li')
    .click(function() {
      $(this)
        .siblings('li')
        .find('a')
        .removeClass('active');
      $(this)
        .find('a')
        .addClass('active');
      $(this).attr('selected');
      var value = $(this).text();
      $(this)
        .parents('.eo-dropdown-menu')
        .css('display', 'none');
      $('.btn.btn-default.dropdown-toggle.width-lg')
        .first('span')
        .text(value);
      $('.btn.btn-default.dropdown-toggle.width-lg')
        .first('span')
        .val(value);
    });

  $('span.button').click(function() {
    $(this)
      .siblings('div.dropdown')
      .toggleClass('active');
  });

  $('.dropdown')
    .find('label')
    .click(function() {
      $(this)
        .parents('.dropdown')
        .removeClass('active');
    });

  $('.oDropdown.oCompanyDropdown')
    .find('.oDropdownValue')
    .click(function() {
      $(this).toggleClass('isActive');
    });

  $('.oLabelInline.oLabelDatePicker').click(function() {
    $(
        '.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all'
      )
      .fadeToggle()
      .css({ top: '225.5px', left: '1011.42px', opacity: '1' });
  });

  $('.oLabelInline.oLabelDatePicker.2').click(function() {
    $(
        '.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all'
      )
      .fadeToggle()
      .css({ top: '225.5px', left: '1170.48px', opacity: '1' });
  });

  $('.oLabelDatePicker').click(function() {
    $(
        '.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all'
      )
      .fadeToggle()
      .css({
        top: '285.958px',
        left: '706.458px',
        'z-index': '1001',
        opacity: '1'
      });
  });

  $('.oLabelDatePicker.2').click(function() {
    $(
        '.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all'
      )
      .fadeToggle()
      .css({
        top: '285.958px',
        left: '845.458px',
        'z-index': '1001',
        opacity: '1'
      });
  });

  $('body').click(function() {
    $(
      '.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all'
    ).css('display', 'none');
    // $('.oMenu.oMuttonMenu.oPeriodSelector').fadeOut();
  });

  $('.jsMuttonLbl.oMtnAction').click(function() {
    $(this)
      .siblings('.oMenu.oMuttonMenu.oPeriodSelector')
      .fadeToggle();
  });

  $('.oBtn.oBtnSecondary.oBtnInline').click(function() {
    $('.oMenu.oMuttonMenu.oPeriodSelector').fadeOut();
  });

  $('.dropdown').click(function() {
    console.log($(this));
    $(this).toggleClass('active');
  });

  $('span.dropdown')
    .find('label')
    .click(function() {
      $(this)
        .siblings('label')
        .parents('input')
        .attr('checked', '');
      $(this)
        .parents('input')
        .attr('checked', 'checked');
    });

  $('.oMenu.oMuttonMenu.oPeriodSelector')
    .find('li')
    .click(function() {
      $(this)
        .siblings('li')
        .removeClass('isSelected');
      $(this).addClass('isSelected');
    });

  $('.glyphicon.air-icon-close.m-0').click(function() {
    $(this)
      .parents('.alert.ng-isolate-scope.alert-warning.alert-dismissible')
      .fadeOut();
  });
});

$(document).ready(function() {
  // Open menu
  $('.navbar-toggle').click(function() {
    $('html').toggleClass('navbar-is-open');
  });
  $('.d-lg-none').click(function() {
    $(this).toggleClass('active');
  });

  // Open Search
  $('.dropdown-toggle').click(function() {
    $(this)
      .siblings(
        '.sc-up-header-search-menu-h.sc-up-header-search-menu-s.hydrated'
      )
      .toggleClass('open');
    $(this)
      .siblings(
        '.dropdown-menu.dropdown-menu-right.advanced-search-dropdown.p-0-top-bottom.width-xlg'
      )
      .fadeToggle();
  });
  $('.btn.btn-link').click(function() {
    $(this)
      .parents(
        '.dropdown-menu.dropdown-menu-right.advanced-search-dropdown.p-0-top-bottom.width-xlg'
      )
      .fadeToggle();
  });
  $('li.sc-up-header-search-menu').click(function() {
    $(this).addClass('active');
    if (
      $(this)
      .siblings()
      .hasClass('active')
    ) {
      $(this)
        .siblings()
        .removeClass('active');
    }
    $('.sc-up-header-search-menu-h.sc-up-header-search-menu-s').removeClass(
      'open'
    );
    var search_choose = $(this)
      .parents('.input-group-search-dropdown.input-group-navbar')
      .siblings('.search-tracking.hydrated');
    var search_parent = search_choose.parent('form');
    console.log(
      $(this)
      .find('a.sc-up-header-search-menu')
      .text()
    );
    // ở cái chỗ đoạn text này em đung mấy cách rồi mà không được anh nom chỉ em được không ạ
    if (
      $(this)
      .find('a.sc-up-header-search-menu')
      .text() == 'Jobs'
    ) {
      search_choose.attr('tracking-label', 'job_search');
      search_parent.attr('action', '/search/jobs/');
    } else if ($(this).text() == 'Freelancers & Agencies') {
      search_choose.attr('tracking-label', 'f1_search');
      search_parent.attr('action', '/search/profiles/');
    }
  });
});