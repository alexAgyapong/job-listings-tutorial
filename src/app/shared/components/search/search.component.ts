import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BreakpointService } from 'src/app/core/services/breakpoint.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  form!: FormGroup;
  isHandset$: Observable<boolean>;

  constructor(private readonly formBuilder: FormBuilder, private readonly breakpointService: BreakpointService) {
    this.isHandset$ = this.breakpointService.isHandset$;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      what: [''],
      where: ['']
    });
  }
}
