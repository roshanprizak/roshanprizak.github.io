$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});

function openCity(evt, cityName) {
    // Declare all variables
    var i, projects, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    projects = document.getElementsByClassName("projects");
    for (i = 0; i < projects.length; i++) {
      projects[i].style.display = "none";
    }
  
    // Get all elements with class="tabcontent" and hide them
    projects = document.getElementsByClassName("projects_all");
    for (i = 0; i < projects.length; i++) {
      projects[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "inherit";
    document.getElementById(cityName).style.visibility = "visible"
    evt.currentTarget.className += " active";
    
}