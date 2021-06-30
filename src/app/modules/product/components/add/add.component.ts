import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NumberOnly } from 'src/app/modules/shared/custom-validators/number-only.validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addProductForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm() {
    this.addProductForm = this.formBuilder.group({
      productName: ["", [Validators.required]],
      sellingPrice: [0, [Validators.required, NumberOnly]],
      mrpPrice: [0, [Validators.required]],
      offerStartDate: ["", [Validators.required]],
      offerEndDate: ["", [Validators.required]],
      productImage: ["", [Validators.required]],
      description: ["", [Validators.required]],
    });
    this.addProductForm.valueChanges.subscribe((res: any) => {
      console.log(res);
    });
  }

  buyNow() {
    console.log(this.addProductForm.value);
  }

}
