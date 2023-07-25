import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "my-form",
  template: `
  <form [formGroup]="myForm">
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="myDropdown"
        (click)="toggleDropdown()"
        [attr.aria-expanded]="isDropdownOpen ? 'true' : 'false'"
        aria-haspopup="true"
      >
        Select Options
      </button>
      <div
        class="dropdown-menu"
        style=" max-height: 115px;
  overflow-y: auto;"
        [class.show]="isDropdownOpen"
        aria-labelledby="myDropdown"
      >
        <input
          class="form-control dropdown-search"
          type="text"
          formControlName="searchText"
          placeholder="Search"
          (keyup)="filterOptions($event.target.value)"
        />

        <a
          class="dropdown-item"
          *ngFor="let option of filteredOptions"
          [class.active]="
            myForm.controls.selectedOptions.value.includes(option)
          "
          (click)="toggleOption(option)"
          >{{ option }}</a
        >
      </div>
    </div>
    </form>
  `,
})
export class MyFormComponent {
  myForm: FormGroup;
  options: string[] = ["Option 1", "Option 2", "Option 3", "Option 4", "mayur"];
  filteredOptions: string[] = [];
  isDropdownOpen: boolean = false;
  selectedItems: any[];

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      selectedOptions: this.formBuilder.array([]),
      searchText:[]
    });
    this.filteredOptions = [...this.options];

    this.myForm.controls.selectedOptions.valueChanges.subscribe((val) => {
      this.selectedItems=[...val]
      this.myForm.controls['searchText'].setValue('')
      this.filterOptions('')
      console.log(this.selectedItems)
    });
  }

  toggleOption(option: string) {
    const selectedOptions = this.myForm.controls.selectedOptions as FormArray;
    const index = selectedOptions.value.indexOf(option);
    if (index === -1) {
      selectedOptions.push(this.formBuilder.control(option));
    } else {
      selectedOptions.removeAt(index);
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  filterOptions(searchTerm: string) {
    if (searchTerm.length == 0) {
      this.filteredOptions = [...this.options];
    } else {
      this.filteredOptions = this.options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
