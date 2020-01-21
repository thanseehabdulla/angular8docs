import { MessageService } from "./message.service";
import { Watch } from "./helpers/watch";
import { WATCHES } from "./mock/watches";
import { Injectable } from "@angular/core";
import { Observable, of, find } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WatchService {
  getWatches(): Observable<Watch[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add(`WatchService: ${id} fetched watches`);
    return of(WATCHES);
  }

  getWatch(id: number): Observable<Watch> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add(`WatchService: ${id} fetched watches`);
    return of(WATCHES.find(watch => watch.id === id));
  }

  constructor(private messageService: MessageService) {}
}
