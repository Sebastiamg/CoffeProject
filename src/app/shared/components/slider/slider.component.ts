import { Component } from '@angular/core';

function slider() {
  const sliderWindow = document.querySelector('#slider')!;

  const slideRight = () => {
    let firtChild = sliderWindow.firstChild! as HTMLElement;
    (sliderWindow as HTMLElement).style.transition = "all .5s";
    (sliderWindow as HTMLElement).style.marginLeft = "-200%";

    setTimeout(() => {
      sliderWindow.insertAdjacentElement("beforeend", firtChild);
      (sliderWindow as HTMLElement).style.transition = "none";
      (sliderWindow as HTMLElement).style.marginLeft = "-100%";
    }, 500)
  }

  const slideLeft = () => {
    let lastChild = sliderWindow.lastChild as HTMLElement;
    (sliderWindow as HTMLElement).style.transition = "all .5s";
    (sliderWindow as HTMLElement).style.marginLeft = "0";

    setTimeout(() => {
      sliderWindow.insertAdjacentElement("afterbegin", lastChild);
      (sliderWindow as HTMLElement).style.transition = "none";
      (sliderWindow as HTMLElement).style.marginLeft = "-100%";
    }, 500)
  }
  
  return {
    slideLeft,
    slideRight
  }
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  ngOnInit() {
    setInterval(() => {
      slider().slideRight()
    }, 3000)
  slider().slideRight()

  }
  slider = slider;
}
