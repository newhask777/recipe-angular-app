import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    imports: [],
    templateUrl: "./header.component.html",
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>(); // This is like eventlistener which listen any event

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }

}