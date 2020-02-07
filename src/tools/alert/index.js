import Vue from "vue";
import alert from "./index.vue";

const Alert = Vue.extend(alert);

export default function createAlert({duration=2500, msg, type}) {
    const app = new Alert({
      //create a div in the outermost layer
        el: document.createElement("div"),
        data: {
            showClass: true,
            over: true,
            type,
            msg
        }
    });
    document.body.appendChild(app.$el);
    setTimeout(_ => {
        app.showClass = false;
    }, duration - 300);
    setTimeout(_ => {
        app.over = false;
    }, duration);
}
