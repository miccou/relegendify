import { Injectable } from "@angular/core";

export const enum CustomEvents {
  addRelegendable = "addRelegendable",
  deleteRelegendable = "deleteRelegendable",
  print = "print",
}

declare var gtag: Function;

@Injectable({
  providedIn: "root",
})
export class GoogleAnalyticsService {
  constructor() {}

  /**
   * Track a custom Google Analytics event.
   *
   * @param eventName The name of the event (e.g., 'buttonClick', 'formSubmit', etc.).
   * @param eventParams The parameters associated with the event (optional).
   */
  trackEvent(eventName: string, eventParams?: { [key: string]: any }): void {
    if (typeof gtag === "function") {
      gtag("event", eventName, eventParams);
    } else {
      console.error("Google Analytics (gtag) is not loaded.");
    }
  }
}
