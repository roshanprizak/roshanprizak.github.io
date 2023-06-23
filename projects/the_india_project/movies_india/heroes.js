
// Generate the JavaScript array dynamically
var actors = ["N. T. Rama Rao", "Akkineni Nageswara Rao", "Krishna", "Rajendra Prasad", "Chiranjeevi", "Sobhan Babu", "Nandamuri Balakrishna", "Jagapathi Babu", "Nagarjuna", "Daggubati Venkatesh", "Krishnam Raju", "Srikanth", "Mohan Babu", "Kanta Rao", "Rajasekhar", "Ravi Teja", "Allari Naresh", "Chandra Mohan", "Suman", "Jaggayya", "Naresh", "Sivaji", "Jr. NTR", "Gummadi", "Mahesh Babu", "Srihari", "Nithiin", "Pawan Kalyan", "Sumanth", "Nani", "Gopichand", "Murali Mohan", "Kamal Haasan", "Prabhas", "J. D. Chakravarthy", "Sharwanand", "Varun Sandesh", "Tarun", "Allu Arjun", "Vishnu Manchu", "Kalyan Ram", "Naga Chaitanya", "Suresh", "Navdeep", "Naga Shourya", "S. V. Ranga Rao", "Vinod Kumar", "Nara Rohit", "Sundeep Kishan", "V. Nagayya", "Aadi", "Ali", "Uday Kiran", "Sunil", "Nikhil Siddharth", "R. Narayana Murthy", "Manoj Manchu", "Raj Tarun", "Sai Dharam Tej", "K. Raghuramaiah", "Rajinikanth", "Sai Kumar", "Vadde Naveen", "Venu", "Ram Charan", "C. H. Narayana Rao", "Bhanuchander", "Siddharth", "Tanish"];

// Generate the HTML code dynamically
var html = "";
for (var i = 0; i < actors.length; i++) {
    var actor = actors[i];
    var avatarImagePath = `avatars/${actor}.jpg`;
    var figureImagePath = `hero_plots/${actor}.png`;
    
    html += `
    <a href="${figureImagePath}" class="lightbox hero-link" title="${actor}" data-gallery="my-gallery">
        <img src="${avatarImagePath}" width="60px" height="60px">
    </a>
    `;
}

// Insert the generated HTML code into the desired element on your web page
document.getElementById("heroes-section").innerHTML = html;
