import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TilesService {
    tileButton(i: number) {
        const buttons = document.getElementsByClassName('tile-button');
        const details = document.getElementsByClassName('tile-detail');
        if (buttons[i].classList.contains("active")) {
            details[i].classList.remove("active");
            buttons[i].classList.remove("active");
        } else {
            for (var ii = 0, len = buttons.length; ii < len; ii++) {
                details[ii].classList.remove("active");
                buttons[ii].classList.remove("active");
            }
            details[i].classList.add("active");
            buttons[i].classList.add("active");
        }
    }
}