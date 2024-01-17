// import gsap from 'gsap';
// import { Quart } from 'gsap/gsap-core';

// import { endDiscount } from './env';

// // Create Countdown
// export const Countdown = {
//     // Backbone-like structure
//     element: document.querySelector('.countdown'),

//     // Params
//     countdown_interval: null,
//     total_seconds: 0,

//     // Initialize the countdown
//     init() {
//         // DOM
//         this.elements = {
//             days: Array.from(this.element.querySelectorAll('.bloc-time.days .figure')),
//             hours: Array.from(this.element.querySelectorAll('.bloc-time.hours .figure')),
//             minutes: Array.from(this.element.querySelectorAll('.bloc-time.min .figure')),
//             seconds: Array.from(this.element.querySelectorAll('.bloc-time.sec .figure')),
//         };

//         // Initialize total seconds
//         this.total_seconds = endDiscount - Date.parse(new Date().toUTCString());

//         // Init countdown values
//         this.values = {
//             days: Math.floor(this.total_seconds / (1000 * 60 * 60 * 24)),
//             hours: Math.floor((this.total_seconds / (1000 * 60 * 60)) % 24),
//             minutes: Math.floor((this.total_seconds / 1000 / 60) % 60),
//             seconds: Math.floor((this.total_seconds / 1000) % 60),
//         };

//         // Animate countdown to the end
//         this.count();
//     },

//     count() {
//         const that = this;
//         const day1 = this.elements.days[0];
//         const day2 = this.elements.days[1];
//         const hour1 = this.elements.hours[0];
//         const hour2 = this.elements.hours[1];
//         const min1 = this.elements.minutes[0];
//         const min2 = this.elements.minutes[1];
//         const sec1 = this.elements.seconds[0];
//         const sec2 = this.elements.seconds[1];

//         this.countdown_interval = setInterval(() => {
//             if (that.total_seconds > 0) {
//                 that.values.seconds -= 1;

//                 if (that.values.minutes >= 0 && that.values.seconds < 0) {
//                     that.values.seconds = 59;
//                     that.values.minutes -= 1;
//                 }

//                 if (that.values.hours >= 0 && that.values.minutes < 0) {
//                     that.values.minutes = 59;
//                     that.values.hours -= 1;
//                 }

//                 if (that.values.days >= 0 && that.values.hours < 0) {
//                     that.values.hours = 59;
//                     that.values.days -= 1;
//                 }

//                 // Update DOM values
//                 // Days
//                 that.checkHour(that.values.days, day1, day2);

//                 // Hours
//                 that.checkHour(that.values.hours, hour1, hour2);

//                 // Minutes
//                 that.checkHour(that.values.minutes, min1, min2);

//                 // Seconds
//                 that.checkHour(that.values.seconds, sec1, sec2);

//                 that.total_seconds -= 1;
//             } else {
//                 clearInterval(that.countdown_interval);
//             }
//         }, 1000);
//     },

//     animateFigure(element, value) {
//         const top = element.querySelector('.top');
//         const bottom = element.querySelector('.bottom');
//         const backTop = element.querySelector('.top-back');
//         const backBottom = element.querySelector('.bottom-back');

//         // Before we begin, change the back value
//         backTop.querySelector('span').innerText = value;

//         // Also change the back bottom value
//         backBottom.querySelector('span').innerText = value;

//         // Then animate
//         gsap.to(top, {
//             duration: 0.8,
//             rotationX: '-180deg',
//             transformPerspective: 300,
//             ease: Quart.easeOut,
//             onComplete: () => {
//                 top.innerText = value;
//                 bottom.innerText = value;
//                 gsap.set(top, { rotationX: 0 });
//             },
//         });

//         gsap.to(backTop, {
//             duration: 0.8,
//             rotationX: 0,
//             transformPerspective: 300,
//             ease: Quart.easeOut,
//             clearProps: 'all',
//         });
//     },

//     checkHour(value, element1, element2) {
//         const val1 = value.toString().charAt(0);
//         const val2 = value.toString().charAt(1);
//         const fig1Value = element1.querySelector('.top').innerText;
//         const fig2Value = element2.querySelector('.top').innerText;

//         if (value >= 10) {
//             // Animate only if the figure has changed
//             if (fig1Value !== val1) this.animateFigure(element1, val1);
//             if (fig2Value !== val2) this.animateFigure(element2, val2);
//         } else {
//             // If we are under 10, replace first figure with 0
//             if (fig1Value !== '0') this.animateFigure(element1, 0);
//             if (fig2Value !== val1) this.animateFigure(element2, val1);
//         }
//     },
// };
