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

        document.querySelector(".karma-8").classList.remove("karma-active");
        document.querySelector(".spa-8 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Healthcare";
        document.querySelector(".child-0").src ="./assests/i/h2.jpg";
        document.querySelector(".txt2").innerHTML = "Elevating Medical Diagnostics with AI: Your Path to Intelligent Healthcare Practices.";
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

        document.querySelector(".karma-8").classList.remove("karma-active");
        document.querySelector(".spa-8 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Agriculture";
        document.querySelector(".txt2").innerHTML = "Cultivating Innovation: AI's Role in Revolutionizing Farming for Sustainable Growth.";
        document.querySelector(".child-1").innerHTML = "Transforms farming with precise annotations. From smart animal husbandry to precision farming, we enhance livestock management, automate poultry houses, and boost crop yields. Our comprehensive approach covers crops monitoring, automated machinery, infrastructure integrity, and farm security through efficient data annotation. In essence, BasicAI is revolutionizing agriculture through AI precision.";
        document.querySelector(".child-0").src ="./assests/i/a.jpg";

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

        document.querySelector(".karma-8").classList.remove("karma-active");
        document.querySelector(".spa-8 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Manufacturing ";
        document.querySelector(".child-0").src ="./assests/i/m.jpg";
        document.querySelector(".txt2").innerHTML = "Innovate, Automate, Elevate: AI Transforming the Future of Manufacturing.";
        document.querySelector(".child-1").innerHTML = "At IndusAI, our state-of-the-art data annotation service is reshaping the manufacturing sector with unmatched precision. From streamlining production efficiency to bolstering quality control measures, we elevate manufacturing processes, automate workflows, and fine-tune overall performance. Our holistic approach spans defect detection, providing guidance for automated machinery, monitoring infrastructure, and enhancing security through effective data annotation. In essence, IndusAI stands at the forefront of a manufacturing revolution, where AI precision is not just a feature but a transformative force, optimizing operations and setting new benchmarks for excellence.";

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

        document.querySelector(".karma-8").classList.remove("karma-active");
        document.querySelector(".spa-8 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Gaming and Media";
        document.querySelector(".child-0").src ="./assests/i/g.jpg";
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

        document.querySelector(".karma-8").classList.remove("karma-active");
        document.querySelector(".spa-8 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Sports";
        document.querySelector(".child-0").src ="./assests/i/s1.jpg";
        document.querySelector(".txt2").innerHTML = "Excel on the Field: AI Redefining Precision and Performance in Sports.";
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

        document.querySelector(".karma-8").classList.remove("karma-active");
        document.querySelector(".spa-8 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Technology ";
        document.querySelector(".child-0").src ="./assests/i/t.jpg";
        document.querySelector(".txt2").innerHTML = "Breaking Barriers in Tech: AI Leading the Charge into Tomorrow's Innovations.";
        document.querySelector(".child-1").innerHTML = "Our pioneering data annotation service, is at the forefront of transforming technology sectors, including Automotive, Aerospace & Defense, Computer Vision, Logistics, and Robotics, with unparalleled precision. From innovation to efficiency, we enhance processes, automate complex tasks, and optimize overall performance. Our comprehensive approach covers autonomous vehicles, aerospace applications, computer vision models, logistics optimization, and robotics automation through efficient data annotation. In essence, TechAI is driving the evolution of technology through AI precision.";

       
    }  
    else  if(i == 7){
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

        document.querySelector(".karma-8").classList.remove("karma-active");
        document.querySelector(".spa-8 ").classList.remove("spa-active");

        document.querySelector(".txt1").innerHTML = "Education";
        document.querySelector(".child-0").src ="./assests/i/gv.jpg";
        document.querySelector(".txt2").innerHTML = "Smart Learning, Bright Futures: AI's Role in Tomorrow's Educational Landscape.";
        document.querySelector(".child-1").innerHTML = "At the heart of our educational initiatives lies a commitment to redefine the learning landscape. Through the infusion of AI, we are creating a learning ecosystem that adapts to the unique needs of each student. Our innovative tools and platforms go beyond traditional education, offering dynamic and personalized experiences that foster a love for learning. With a focus on cultivating critical thinking, creativity, and collaboration, our vision is to prepare students not just for exams, but for a future where adaptability and innovation are paramount. Step into a new era of education with us, where AI is the driving force for student success.";
    }
    else{
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
      
      document.querySelector(".karma-7").classList.remove("karma-active");
      document.querySelector(".spa-7 ").classList.remove("spa-active");

      document.querySelector(".karma-8").classList.add("karma-active");
      document.querySelector(".spa-8 ").classList.add("spa-active");

      document.querySelector(".txt1").innerHTML = "Government";
      document.querySelector(".child-0").src ="./assests/g.jpg";
      document.querySelector(".txt2").innerHTML = "AI-Led Government Excellence: Navigating Towards a Brighter Future.";
      document.querySelector(".child-1").innerHTML = "Our advanced data annotation service, is playing a pivotal role in revolutionizing government operations with unparalleled precision. From public services to security, we enhance governmental processes, automate data analysis, and optimize overall efficiency. Our comprehensive approach covers citizen data analysis, automated security surveillance, infrastructure monitoring, and regulatory compliance through efficient data annotation. In essence, GovAI is reshaping the landscape of government operations through AI precision.";
    }
}

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
});