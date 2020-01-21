import { WatchService } from "./../watch.service";
import { WATCHES } from "./../mock/watches";
import { Component, OnInit, Input } from "@angular/core";
import { Watch } from "./../helpers/watch";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-watch-details",
  templateUrl: "./watch-details.component.html",
  styleUrls: ["./watch-details.component.scss"]
})
export class WatchDetailsComponent implements OnInit {
  @Input() watch: Watch;
  constructor(
    private route: ActivatedRoute,
    private watchService: WatchService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getWatch()
  }

  getWatch(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.watchService.getWatch(id).subscribe(watch => (this.watch = watch));
  }
}
