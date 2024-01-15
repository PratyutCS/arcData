window.addEventListener("load",function(){
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
    var hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(function(element) {
      element.classList.remove("hidden");
    });
  })

function fakehai(i) {
    if (i == 1) {
        document.querySelector(".karma-1").classList.add("karma-active");
        document.querySelector(".spa-1 ").classList.add("spa-active");

        document.querySelector(".karma-2").classList.remove("karma-active");
        document.querySelector(".spa-2 ").classList.remove("spa-active");

        document.querySelector(".karma-3").classList.remove("karma-active");
        document.querySelector(".spa-3 ").classList.remove("spa-active");

        document.querySelector(".karma-4").classList.remove("karma-active");
        document.querySelector(".spa-4 ").classList.remove("spa-active");

        document.querySelector(".karma-5").classList.remove("karma-active");
        document.querySelector(".spa-5 ").classList.remove("spa-active");

        document.querySelector(".karma-6").classList.remove("karma-active");
        document.querySelector(".spa-6 ").classList.remove("spa-active");
        
        document.querySelector(".karma-7").classList.remove("karma-active");
        document.querySelector(".spa-7 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Healthcare";
        document.querySelector(".txt2").innerHTML = "Empowering Wellness through AI: Your Path to Precision Healthcare.";
        document.querySelector(".child-1").innerHTML = "Our groundbreaking data annotation service, is reshaping healthcare with pinpoint precision. From diagnostics to patient care, we enhance medical management, automate healthcare processes, and elevate overall efficiency. Our comprehensive approach covers medical imaging analysis, automated equipment, infrastructure maintenance, and patient security through efficient data annotation. In essence, MedAI is revolutionizing healthcare through AI precision.";
    } 
    else if (i == 2) { 
        document.querySelector(".karma-1").classList.remove("karma-active");
        document.querySelector(".spa-1 ").classList.remove("spa-active");

        document.querySelector(".karma-2").classList.add("karma-active");
        document.querySelector(".spa-2 ").classList.add("spa-active");

        document.querySelector(".karma-3").classList.remove("karma-active");
        document.querySelector(".spa-3 ").classList.remove("spa-active");

        document.querySelector(".karma-4").classList.remove("karma-active");
        document.querySelector(".spa-4 ").classList.remove("spa-active");

        document.querySelector(".karma-5").classList.remove("karma-active");
        document.querySelector(".spa-5 ").classList.remove("spa-active");

        document.querySelector(".karma-6").classList.remove("karma-active");
        document.querySelector(".spa-6 ").classList.remove("spa-active");
        
        document.querySelector(".karma-7").classList.remove("karma-active");
        document.querySelector(".spa-7 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Agriculture";
        document.querySelector(".txt2").innerHTML = "Cultivating Tomorrow: AI Revolutionizing Agriculture for Sustainable Growth.";
        document.querySelector(".child-1").innerHTML = "Transforms farming with precise annotations. From smart animal husbandry to precision farming, we enhance livestock management, automate poultry houses, and boost crop yields. Our comprehensive approach covers crops monitoring, automated machinery, infrastructure integrity, and farm security through efficient data annotation. In essence, BasicAI is revolutionizing agriculture through AI precision.";

    } 
    else if (i == 3) {
        document.querySelector(".karma-1").classList.remove("karma-active");
        document.querySelector(".spa-1 ").classList.remove("spa-active");

        document.querySelector(".karma-2").classList.remove("karma-active");
        document.querySelector(".spa-2 ").classList.remove("spa-active");

        document.querySelector(".karma-3").classList.add("karma-active");
        document.querySelector(".spa-3 ").classList.add("spa-active");

        document.querySelector(".karma-4").classList.remove("karma-active");
        document.querySelector(".spa-4 ").classList.remove("spa-active");

        document.querySelector(".karma-5").classList.remove("karma-active");
        document.querySelector(".spa-5 ").classList.remove("spa-active");

        document.querySelector(".karma-6").classList.remove("karma-active");
        document.querySelector(".spa-6 ").classList.remove("spa-active");
        
        document.querySelector(".karma-7").classList.remove("karma-active");
        document.querySelector(".spa-7 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Manufacturing ";
        document.querySelector(".txt2").innerHTML = "Innovate, Automate, Elevate: AI Transforming the Future of Manufacturing.";
        document.querySelector(".child-1").innerHTML = "Our cutting-edge data annotation service, is transforming the manufacturing landscape with unparalleled precision. From production efficiency to quality control, we enhance manufacturing processes, automate workflows, and optimize overall performance. Our comprehensive approach covers defect detection, automated machinery guidance, infrastructure monitoring, and security enhancement through efficient data annotation. In essence, IndusAI is revolutionizing manufacturing through AI precision.";

      } 
    else if (i == 4) {
        document.querySelector(".karma-1").classList.remove("karma-active");
        document.querySelector(".spa-1 ").classList.remove("spa-active");

        document.querySelector(".karma-2").classList.remove("karma-active");
        document.querySelector(".spa-2 ").classList.remove("spa-active");

        document.querySelector(".karma-3").classList.remove("karma-active");
        document.querySelector(".spa-3 ").classList.remove("spa-active");

        document.querySelector(".karma-4").classList.add("karma-active");
        document.querySelector(".spa-4 ").classList.add("spa-active");

        document.querySelector(".karma-5").classList.remove("karma-active");
        document.querySelector(".spa-5 ").classList.remove("spa-active");

        document.querySelector(".karma-6").classList.remove("karma-active");
        document.querySelector(".spa-6 ").classList.remove("spa-active");
        
        document.querySelector(".karma-7").classList.remove("karma-active");
        document.querySelector(".spa-7 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Gaming and Media";
        document.querySelector(".txt2").innerHTML = "Unleashing Imagination, Powering Play: AI Redefining Media, Gaming & Entertainment.";
        document.querySelector(".child-1").innerHTML = "Our advanced data annotation service, is revolutionizing the realms of media, gaming, and entertainment with unparalleled precision. From content creation to user experience, we enhance media production, automate gaming interactions, and elevate overall entertainment engagement. Our comprehensive approach covers content analysis, gaming automation, infrastructure monitoring, and security reinforcement through efficient data annotation. In essence, MediaMind is reshaping the landscape of media, gaming, and entertainment through AI precision.";
       
      } 
      else if (i == 5) {
        document.querySelector(".karma-1").classList.remove("karma-active");
        document.querySelector(".spa-1 ").classList.remove("spa-active");

        document.querySelector(".karma-2").classList.remove("karma-active");
        document.querySelector(".spa-2 ").classList.remove("spa-active");

        document.querySelector(".karma-3").classList.remove("karma-active");
        document.querySelector(".spa-3 ").classList.remove("spa-active");

        document.querySelector(".karma-4").classList.remove("karma-active");
        document.querySelector(".spa-4 ").classList.remove("spa-active");

        document.querySelector(".karma-5").classList.add("karma-active");
        document.querySelector(".spa-5 ").classList.add("spa-active");

        document.querySelector(".karma-6").classList.remove("karma-active");
        document.querySelector(".spa-6 ").classList.remove("spa-active");
        
        document.querySelector(".karma-7").classList.remove("karma-active");
        document.querySelector(".spa-7 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Sports";
        document.querySelector(".txt2").innerHTML = "Elevate Your Game: AI, where Precision Meets Performance in Sports.";
        document.querySelector(".child-1").innerHTML = "Our cutting-edge data annotation service, is driving transformative changes in the world of sports with unparalleled precision. From performance analysis to fan engagement, we enhance sports management, automate analytical processes, and optimize overall sporting experiences. Our comprehensive approach covers player movement tracking, automated equipment guidance, infrastructure monitoring, and security enhancement through efficient data annotation. In essence, SportsAI is revolutionizing the sports industry through AI precision.";

       
    } 
    else if (i == 6) {
        document.querySelector(".karma-1").classList.remove("karma-active");
        document.querySelector(".spa-1 ").classList.remove("spa-active");

        document.querySelector(".karma-2").classList.remove("karma-active");
        document.querySelector(".spa-2 ").classList.remove("spa-active");

        document.querySelector(".karma-3").classList.remove("karma-active");
        document.querySelector(".spa-3 ").classList.remove("spa-active");

        document.querySelector(".karma-4").classList.remove("karma-active");
        document.querySelector(".spa-4 ").classList.remove("spa-active");

        document.querySelector(".karma-5").classList.remove("karma-active");
        document.querySelector(".spa-5 ").classList.remove("spa-active");

        document.querySelector(".karma-6").classList.add("karma-active");
        document.querySelector(".spa-6 ").classList.add("spa-active");
        
        document.querySelector(".karma-7").classList.remove("karma-active");
        document.querySelector(".spa-7 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Technology ";
        document.querySelector(".txt2").innerHTML = "Tech Beyond Boundaries: AI Pioneering Tomorrow's Innovations.";
        document.querySelector(".child-1").innerHTML = "Our pioneering data annotation service, is at the forefront of transforming technology sectors, including Automotive, Aerospace & Defense, Computer Vision, Logistics, and Robotics, with unparalleled precision. From innovation to efficiency, we enhance processes, automate complex tasks, and optimize overall performance. Our comprehensive approach covers autonomous vehicles, aerospace applications, computer vision models, logistics optimization, and robotics automation through efficient data annotation. In essence, TechAI is driving the evolution of technology through AI precision.";

       
    }  
    else {
        document.querySelector(".karma-1").classList.remove("karma-active");
        document.querySelector(".spa-1 ").classList.remove("spa-active");

        document.querySelector(".karma-2").classList.remove("karma-active");
        document.querySelector(".spa-2 ").classList.remove("spa-active");

        document.querySelector(".karma-3").classList.remove("karma-active");
        document.querySelector(".spa-3 ").classList.remove("spa-active");

        document.querySelector(".karma-4").classList.remove("karma-active");
        document.querySelector(".spa-4 ").classList.remove("spa-active");

        document.querySelector(".karma-5").classList.remove("karma-active");
        document.querySelector(".spa-5 ").classList.remove("spa-active");

        document.querySelector(".karma-6").classList.remove("karma-active");
        document.querySelector(".spa-6 ").classList.remove("spa-active");
        
        document.querySelector(".karma-7").classList.add("karma-active");
        document.querySelector(".spa-7 ").classList.add("spa-active");

        document.querySelector(".txt1").innerHTML = "Government";
        document.querySelector(".txt2").innerHTML = "Smart Governance, Brighter Future: AI Shaping Tomorrow's Public Service.";
        document.querySelector(".child-1").innerHTML = "Our advanced data annotation service, is playing a pivotal role in revolutionizing government operations with unparalleled precision. From public services to security, we enhance governmental processes, automate data analysis, and optimize overall efficiency. Our comprehensive approach covers citizen data analysis, automated security surveillance, infrastructure monitoring, and regulatory compliance through efficient data annotation. In essence, GovAI is reshaping the landscape of government operations through AI precision.";
    }
}