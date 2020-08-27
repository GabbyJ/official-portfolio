(this["webpackJsonpgj-portfolio"]=this["webpackJsonpgj-portfolio"]||[]).push([[0],{14:function(e,a,t){},17:function(e,a,t){e.exports=t(32)},32:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(15),o=t.n(r),i=t(5),c=t(6),s=t(8),m=t(7),u=t(4),d=t.n(u),p=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){d()(".nav-toggle").click((function(e){e.preventDefault(),d()("html").toggleClass("openNav"),d()(".nav-toggle").toggleClass("active")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"primary-nav","data-aos":"fade-right","data-aos-duration":"700"},l.a.createElement("button",{href:"#",className:"hamburger open-panel nav-toggle"},l.a.createElement("span",{className:"screen-reader-text"},"Menu")),l.a.createElement("nav",{role:"navigation",className:"menu"},l.a.createElement("img",{className:"logo",src:"./images/gj-logo-red-orange.png",alt:"Logo saying 'GJ'"}),l.a.createElement("div",{className:"overflow-container"},l.a.createElement("ul",{className:"menu-dropdown"},l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},"Home"),l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-home","data-aos":"fade-right","data-aos-duration":"700"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About"),l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-address-card","data-aos":"fade-right","data-aos-duration":"700"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#aboutTabs"},"Qualifications"),l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-laptop-code","data-aos":"fade-right","data-aos-duration":"700"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#portfolio"},"Portfolio"),l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-folder-open","data-aos":"fade-right","data-aos-duration":"700"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact"),l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fa fa-handshake","data-aos":"fade-right","data-aos-duration":"700"})))))))}}]),t}(n.Component),E=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".typed-text"),a=document.querySelector(".cursor"),t=["Web Developer","Photographer","Traveler"],n=0,l=0;function r(){l<t[n].length?(a.classList.contains("typing")||a.classList.add("typing"),e.textContent+=t[n].charAt(l),l++,setTimeout(r,100)):(a.classList.remove("typing"),setTimeout(o,500))}function o(){l>0?(a.classList.contains("typing")||a.classList.add("typing"),e.textContent=t[n].substring(0,l-1),l--,setTimeout(o,75)):(a.classList.remove("typing"),++n>=t.length&&(n=0),setTimeout(r,100))}document.addEventListener("DOMContentLoaded",(function(){t.length&&setTimeout(r,750)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"typingEffect"},l.a.createElement("h1",{className:"name","data-aos":"fade-up","data-aos-duration":"1000"}," Hey, I'm Gabrielle Jacobs"),l.a.createElement("p",{className:"tagline","data-aos":"fade-up","data-aos-duration":"1000"},l.a.createElement("span",{className:"typed-text"}),l.a.createElement("span",{className:"cursor"},"\xa0")))}}]),t}(n.Component);var g=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("img",{className:"profilepic",src:"./images/orange-Avatar3.svg",alt:"Avatar of Gabrielle Jacobs","data-aos":"fade-down","data-aos-duration":"1000"}),l.a.createElement(E,null),l.a.createElement("div",{className:"socials","data-aos":"fade-up","data-aos-duration":"1000"},l.a.createElement("a",{href:"https://github.com/GabbyJ",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/gabrielle-jacobs-9a890473",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fab fa-linkedin-in"})),l.a.createElement("a",{href:"sms:+1412-266-1336",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fas fa-mobile-alt"})),l.a.createElement("a",{href:"mailto:GabbyJ424@gmail.com",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fas fa-envelope"}))))};var f=function(){return l.a.createElement("section",{className:"about",id:"about"},l.a.createElement("h2",{"data-aos":"fade-up","data-aos-duration":"700"},"About Me"),l.a.createElement("div",{className:"summary"},l.a.createElement("h3",{className:"aboutHeadline","data-aos":"fade-up","data-aos-duration":"700"},"A curiosity driven Front End Developer with multimedia chops"),l.a.createElement("div",{"data-aos":"fade-up","data-aos-duration":"700"},l.a.createElement("p",null,"I'm passionate about bringing both the technical and visual aspects of digital products to life. I care deeply about the user experience, beautiful pixels, and writing clean accessible code that's readable by humans."),l.a.createElement("p",null,"I'm happiest when I'm creating, learning, exploring, and thinking about how to make things better and solve problems."),l.a.createElement("p",null,"Born and raised Pittsburgher who now lives in Dallas, TX. I'm a self taught web developer who loves learning as much as I can. In my free time, I'm usually playing an instrument, watching movies, or traveling the world. Keep scrolling down to find out more about me!"))),l.a.createElement("div",null,l.a.createElement("a",{href:"./images/Gabrielle_Jacobs_Resume.pdf",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("button",null,"View Resume")),l.a.createElement("a",{href:"#portfolio"},l.a.createElement("button",null,"View Portfolio"))))},b=t(9);var h=function(){return l.a.createElement("div",{className:"tab1-c"},l.a.createElement("table",{width:"100%",border:0,cellSpacing:30},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-html5"}))," HTML"),l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-bootstrap"}))," Bootstrap")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-css3-alt"}))," CSS"),l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-sass"}))," SASS")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-js"}))," Javascript"),l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement(b.a,{className:"DiLogo"}))," jQuery")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-react"}))," React"),l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-node"}))," Node")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-python"}))," Python"),l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-wordpress"}))," WordPress")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-github"}))," Git/Github"),l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fab fa-adobe"}))," Adobe Creative Suite")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-terminal"}))," Command Line"),l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement(b.b,{className:"DiLogo"}))," Visual Studio Code")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("img",{src:"./images/responsive.png",alt:"phone, tablet, computer icon",className:"DiLogo"}))," Responsive Websites"),l.a.createElement("td",null,l.a.createElement("span",null,l.a.createElement("img",{src:"./images/w3c.png",alt:"W3C icon",className:"DiLogo"}))," Web Accessibility")))))},y=t(2),v=(t(13),t(14),t(3)),N=[{id:1,date:"11/2019 - Present",position:"Digital Content Lead",company:"Wieck Media",description:["Fixed bugs and added website features to production 80% quicker than average by streamlining the ticketing process","Improved the design and function of custom pages by adding CSS/ JS customizations","Achieved a 1-on-1 line of communication for all 6 Wordpress clients to provide assistance and maintenance 50% faster","Created custom templates from stage to production 60% quicker by both streamlining the ticketing process and providing customization knowledge others lack"],keywords:["HTML","CSS","Debugging","Design","Team\xa0Management","Wordpress","Custom\xa0Email\xa0Templates","Problem\xa0Solving"]},{id:2,date:"6/2017 - 11/2019",position:"Content Management Specialist",company:"Wieck Media",description:["1 of 4 employees responsible for updating 15+ websites with releases, social media, images, videos, and graphics","Provide internal and external support with an average 30 min turn around for multiple major car, health, and news corporations, an airline, and others","Informed thousands of people on important corporate news within 30 mins through custom email blasts for 10+ countries/divisions"],keywords:["HTML","CSS","Web\xa0Maintenance","E-blasts","Multimedia","Photoshop","Teamwork"]},{id:3,date:"6/2015 - 12/2015",position:"Intern",company:"Shoutside Media",description:["Built and maintained 3 Wordpress sites for lawyers and doctors","Responsible for recording professional quality commercials and stock footage for 5 local companies","Improved video editing techniques using Adobe Premiere and After Effects"],keywords:["HTML","CSS","Wordpress","Video\xa0shooting/editing","Photography","Networking","Multimedia","Adobe\xa0Creative\xa0Suite"]},{id:4,date:"07/2011 \u2013 11/2016",position:"Customer Service",company:"Fast food, Retail, Amusement Park",description:["Responsible for handling over $500 a day","Successfully sold 3x more credit cards than the average salesperson","Managed floor inventory and sanitary guidelines","Ensure all safety measures stayed in place to prevent injury"],keywords:["Customer\xa0Service","Money\xa0Management","Sales","Crisis\xa0Management"]}],k=[{id:1,date:"6/2019 \u2013 In Progress...",degree:"MERN Fullstack Certificate",school:"Udemy",description:"Self pace course focused on React, Node, Express, and MongoDB.",keywords:["HTML","CSS","Bootstrap ","Javascript (ES6)","jQuery","Node","Express","APIs","EJS","SQL","MongoDB","Mongoose","Authentication/Security"]},{id:2,date:"8/2012 - 1/2016",degree:"B.S. Graphic Communications and Multimedia",school:"California University of Pennsylvania",description:"Focused on Adobe Creative Suite for web, photography, video, design layout, and image manipulation. Learned printing techniques for various mediums.",keywords:["HTML","CSS","Photoshop","Dreamweaver","Indesign","Illustrator","Adobe\xa0Premiere","Design\xa0Layout","Graphic\xa0Design","Screen\xa0Printing","Lithography","Flexography"]},{id:3,date:"8/2008 - 5/2012",degree:"High School Diploma",school:"Penn Hills Senior High School",keywords:["Statistics","Calculus","Visual\xa0Basic\xa0Computer\xa0Programming"]},{id:4,date:"8/2018 - Present",degree:"Responsive Web Design Certification",school:"FreeCodeCamp",description:"Self paced path to a Fullstack Developer. Used as supplement material for Udemy course.",keywords:["HTML","CSS","Accessability","ES6","Bootstrap","jQuery","Sass","React"]}],S=[{id:1,image:"./images/portfolio-images/blackjack-mockup.jpg",title:"Blackjack",description:"You against the dealer. Get as close to 21 as you can.",tech:["HTML","CSS","Flexbox","Javascript"],github:"https://github.com/GabbyJ/Blackjack",codepen:"",link:"https://gabbyj.github.io/Blackjack/"},{id:2,image:"./images/portfolio-images/office-mockup.jpg",title:"Random Quote Generator",description:"Random quote generator created using characters from The Office and their famous quotes.",tech:["HTML","CSS","Javascript"],github:"https://github.com/GabbyJ/Office-Quote-Generator",codepen:"",link:"http://htmlpreview.github.io/?https://github.com/GabbyJ/Office-Quote-Generator/blob/master/index.html"},{id:3,image:"./images/portfolio-images/hangman-mockup.jpg",title:"Hangman",description:"Name your hangman and try keeping them alive by guessing the word.",tech:["Python"],github:"https://github.com/GabbyJ/Python",codepen:"",link:"https://trinket.io/python/1dbf3ceef6?outputOnly=true"},{id:4,image:"./images/portfolio-images/simon-mockup.jpg",title:"Simon Memory Game",description:"How good is your memeory? Try to beat Simon by remembering the order of the colors.",tech:["HTML","CSS","Jquery"],github:"https://github.com/GabbyJ/Simon-Game",codepen:"",link:"https://gabbyj.github.io/Simon-Game/"},{id:5,image:"./images/portfolio-images/nextchapter-mockup.jpg",title:"Travel Website",description:"Search by destinations or activites to find your perfect trip! Organized group or solo trips with easy payment. Book Now!",tech:["HTML","CSS","Wordpress"],github:"https://github.com/GabbyJ/nextchaptertravel",codepen:"",link:"https://nextchaptertravel.com"},{id:6,image:"./images/portfolio-images/tindog-mockup.jpg",title:"App Landing Page",description:"Is your dog lonely? Help them find a friend with TinDog.",tech:["HTML","CSS","Bootstrap"],github:"https://github.com/GabbyJ/TinDog",codepen:"",link:"https://gabbyj.github.io/TinDog/"}];function w(e){return l.a.createElement("div",null,l.a.createElement("h3",{className:"vertical-timeline-element-title"},e.position),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.company),l.a.createElement("p",null,e.description),l.a.createElement("p",null,e.keywords))}function j(e){var a=e.keywords.map((function(e){return l.a.createElement("span",null,l.a.createElement("span",{className:"bubble"},e)," ")})),t=e.description.map((function(e){return l.a.createElement("span",null,"~ ",e)}));return l.a.createElement(w,{key:e.id,position:e.position,company:e.company,description:t,keywords:a})}var C=function(){return l.a.createElement("div",{className:"tab2-c"},l.a.createElement(y.VerticalTimeline,null,l.a.createElement(y.VerticalTimelineElement,{iconStyle:{background:"#872214",color:"#FAEBD7"},icon:l.a.createElement(v.a,null)}),l.a.createElement(y.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#DE7F3F",color:"#FAEBD7"},contentArrowStyle:{borderRight:"7px solid  #DE7F3F"},date:N[0].date,iconStyle:{background:"#050404",color:"#FAEBD7"},icon:l.a.createElement(v.b,null)},j(N[0])),l.a.createElement(y.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:N[1].date,iconStyle:{background:"#050404",color:"#FAEBD7"},icon:l.a.createElement(v.b,null)},j(N[1])),l.a.createElement(y.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:N[2].date,iconStyle:{background:"#050404",color:"#FAEBD7"},icon:l.a.createElement(v.b,null)},j(N[2])),l.a.createElement(y.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"7/2011 - 11/2016",iconStyle:{background:"#050404",color:"#FAEBD7"},icon:l.a.createElement(v.b,null)},j(N[3])),l.a.createElement("p",null,"\xa0")))},M=t(16);function D(e){return l.a.createElement("div",null,l.a.createElement("h3",{className:"vertical-timeline-element-title"},e.degree),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.school),l.a.createElement("p",null,e.description),l.a.createElement("p",null,e.keywords))}function T(e){var a=e.keywords.map((function(e){return l.a.createElement("span",null,l.a.createElement("span",{className:"bubble"},e)," ")}));return l.a.createElement(D,{key:e.id,degree:e.degree,school:e.school,description:e.description,keywords:a})}var L=function(){return l.a.createElement("div",{className:"tab3-c"},l.a.createElement(y.VerticalTimeline,null,l.a.createElement(y.VerticalTimelineElement,{iconStyle:{background:"#872214",color:"#FAEBD7"},icon:l.a.createElement(M.a,null)}),l.a.createElement(y.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#DE7F3F",color:"#FAEBD7"},contentArrowStyle:{borderRight:"7px solid  #DE7F3F"},date:k[0].date,iconStyle:{background:"#050404",color:"#FAEBD7"},icon:l.a.createElement(v.b,null)},T(k[0])),l.a.createElement(y.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:k[3].date,iconStyle:{background:"#050404",color:"#FAEBD7"},icon:l.a.createElement(v.b,null)},T(k[3])),l.a.createElement(y.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:k[1].date,iconStyle:{background:"#050404",color:"#FAEBD7"},icon:l.a.createElement(v.b,null)},T(k[1])),l.a.createElement("p",null,"\xa0")))},A=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){d()(".tab-nav-wrapper ul li a").click((function(){d()(".tab-content-wrapper > div").hide(),d()(".tab-content-wrapper > div").eq(d()(this).parent().index()).show()}))}},{key:"render",value:function(){return l.a.createElement("section",{className:"experience",id:"aboutTabs"},l.a.createElement("div",{className:"tab-nav-wrapper","data-aos":"fade-up","data-aos-duration":"700"},l.a.createElement("ul",null,l.a.createElement("li",{className:"one"},l.a.createElement("a",null,l.a.createElement("h2",null,"Skills"))),l.a.createElement("li",{className:"two"},l.a.createElement("a",null,l.a.createElement("h2",null,"Experience"))),l.a.createElement("li",{className:"three"},l.a.createElement("a",null,l.a.createElement("h2",null,"Education"))),l.a.createElement("hr",null))),l.a.createElement("div",{className:"tab-content-wrapper","data-aos":"fade-up","data-aos-duration":"700"},l.a.createElement(h,null),l.a.createElement(C,null),l.a.createElement(L,null)))}}]),t}(n.Component);function x(e){return l.a.createElement("div",{className:"project",id:e.id,"data-aos":"fade-up","data-aos-duration":"700"},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{className:"image",src:e.image,alt:"project"}),l.a.createElement("div",{className:"img-overlay"},l.a.createElement("p",{className:"hover-text"},e.description),e.tech)),l.a.createElement("p",{className:"title-panel"},e.title,l.a.createElement("span",{className:"link-panel"},l.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fas fa-link"})))))}function G(e){var a=e.tech.map((function(e){return l.a.createElement("span",{className:"tech"}," ",e)}));return l.a.createElement(x,{key:e.id,image:e.image,title:e.title,description:e.description,tech:a,github:e.github,link:e.link})}var F=function(){return l.a.createElement("section",{className:"portfolio",id:"portfolio"},l.a.createElement("h2",{"data-aos":"fade-up","data-aos-duration":"700"},"Portfolio"),l.a.createElement("div",{id:"projects"},S.map(G)),l.a.createElement("a",{href:"https://github.com/GabbyJ",target:"_blank",rel:"noreferrer noopener","data-aos":"fade-up","data-aos-duration":"700"},l.a.createElement("button",null,l.a.createElement("i",{className:"fab fa-github"})," See more on GitHub")))};function J(){return l.a.createElement("section",{className:"contact",id:"contact"},l.a.createElement("h2",{"data-aos":"fade-up","data-aos-duration":"700"},"Message Me"),l.a.createElement("div",{className:"form","data-aos":"fade-up","data-aos-duration":"700"},l.a.createElement("form",{id:"contact-form",method:"POST",action:"https://formsubmit.co/fddbb2df13653f25023d42513795606c",className:"login-form"},l.a.createElement("input",{type:"hidden",name:"_next",value:"https://gabbyj.github.io/gj-official-portfolio/thanks.html"}),l.a.createElement("input",{type:"hidden",name:"_subject",value:"Enquiry from gmjacobsdev.com"}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"Name",placeholder:"Name",required:"required","aria-label":"Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"Email",placeholder:"Email",required:"required","aria-label":"Email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Message"),l.a.createElement("textarea",{type:"text",className:"form-control",id:"message",name:"Message",placeholder:"Message",required:"required","aria-label":"Enter your Message",rows:"5"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))}var P=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"experience-2",id:"contact","data-aos":"fade-up","data-aos-duration":"1000"},l.a.createElement(J,null))}}]),t}(n.Component);var B=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"footer-hr"},l.a.createElement("hr",{className:"line-top-footer"}),l.a.createElement("hr",{className:"line-bottom-footer"})),l.a.createElement("footer",null,l.a.createElement("section",{className:"footer","data-aos":"fade-up","data-aos-duration":"700"},l.a.createElement("div",{className:"footer-contact"},l.a.createElement("img",{className:"logo-footer",src:"./images/gj-logo-orange.png",alt:"Logo saying 'GJ' in curly brackets"}),l.a.createElement("p",null,"Live like no one else, so you can live like no one else.")),l.a.createElement("div",{className:"footer-socials"},l.a.createElement("a",{href:"https://github.com/GabbyJ",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/gabrielle-jacobs-9a890473",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fab fa-linkedin-in"})),l.a.createElement("a",{href:"sms:+1412-266-1336",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fas fa-mobile-alt"})),l.a.createElement("a",{href:"mailto:GabbyJ424@gmail.com",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fas fa-envelope"}))),l.a.createElement("hr",null),l.a.createElement("p",{className:"made"},"Made with ",l.a.createElement("i",{className:"fas fa-heart"})," using\xa0",l.a.createElement("i",{className:"fab fa-react"})),l.a.createElement("p",{className:"copyright"},"\xa9 2020 Gabrielle Jacobs"))))};var O=function(){return l.a.createElement("div",null,l.a.createElement("hr",{className:"line-top"}),l.a.createElement("hr",{className:"line-bottom"}))};var H=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{className:"techDesk",src:"./images/tech-desk.png",alt:"","data-aos":"fade-left","data-aos-duration":"700"}),l.a.createElement("hr",{className:"line"})),l.a.createElement("hr",{className:"line-bottom"}))};var I=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement("div",{className:"container",id:"home"},l.a.createElement(g,null),l.a.createElement(H,null),l.a.createElement(f,null),l.a.createElement(O,null),l.a.createElement(A,null),l.a.createElement(O,null),l.a.createElement(F,null),l.a.createElement(O,null),l.a.createElement(P,null)),l.a.createElement(B,null))};o.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b1cecdf3.chunk.js.map