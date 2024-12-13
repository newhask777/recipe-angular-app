import { Component, EventEmitter, Output } from "@angular/core";
import { DropdownDirective } from "../shared/dropdown.directive";

@Component({
    selector: "app-header",
    imports: [DropdownDirective],
    templateUrl: "./header.component.html",
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>(); // This is like eventlistener which listen any event

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }

}