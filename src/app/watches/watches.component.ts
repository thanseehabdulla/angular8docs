import { MessageService } from "./../message.service";
import { WatchService } from "./../watch.service";
import { Watch } from "./../helpers/watch";
import { WATCHES } from "./../mock/watches";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-watches",
  templateUrl: "./watches.component.html",
  styleUrls: ["./watches.component.scss"]
})
export class WatchesComponent implements OnInit {
  watches = WATCHES;

  watchCart: Watch[];

  watch: Watch = {
    id: 11,
    name: "Dr Nice"
  };

  selectedWatch: Watch;

  constructor(
    private watchService: WatchService,
    private messageService: MessageService
  ) {}
  onSelect(watch: Watch): void {
    this.messageService.add("clicked watches");
    this.selectedWatch = watch;
  }
  getWatches(): void {
    this.watchService.getWatches().subscribe(watch => (this.watchCart = watch));
  }

  ngOnInit() {
    this.getWatches();
  }
}
