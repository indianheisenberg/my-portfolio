import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portfolio';
  projects: any = [
    {
      name: 'Webiknowr.com',
      description:
        'A complete webinar solution application where user can attend webinars and also post new webinar.',
      features:
        'Free Webinar Listings, Free webinar submission, webinar management dashboard, free registrants leads, etc.',
      tech: 'Angular, Material UI, Java',
      link: 'https://www.webiknowr.com',
    },
    {
      name: 'Vaccine Slots',
      description:
        'A tool which gives information on next available covid19 vaccination slots in a particular district or pincode.',
      features: 'No registration needed, Easy to search',
      tech: 'Angular, Material UI, REST API',
      link: 'https://vaccine-slot.web.app',
    },
  ];

  logos: any = [
    { image: '../assets/angular_logo.png', name: 'Angular' },
    { image: '../assets/js_logo.png', name: 'Javascript' },
    { image: '../assets/css_logo.png', name: 'CSS' },
    { image: '../assets/html_logo.png', name: 'HTML' },
    { image: '../assets/bootstrap_logo.jpg', name: 'Bootstrap' },
    { image: '../assets/java_logo.png', name: 'JAVA' },
    { image: '../assets/springboot_logo.png', name: 'Springboot' },
    { image: '../assets/maven_logo.png', name: 'Maven' },
    { image: '../assets/tomcat_logo.png', name: 'Apache Tomcat' },
    { image: '../assets/jenkins_logo.png', name: 'Jenkins' },
    { image: '../assets/springboot_logo.png', name: 'Springboot' },
    { image: '../assets/firebase_logo.png', name: 'Firebase' },
    { image: '../assets/aws_logo.png', name: 'AWS' },
  ];
}
