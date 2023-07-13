import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit, VERSION } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-currecy',
  templateUrl: './currecy.component.html',
  styleUrls: ['./currecy.component.css']
})
export class CurrecyComponent {
  resultText: string = 'Result appears here';
  form !: FormGroup;
  currencyData: any = {};

  currencyCodes = Object.keys(this.currencyData);

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      amount: new FormControl(null, Validators.required),
      from: new FormControl(null, Validators.required),
      to: new FormControl(null, Validators.required),
    });
    this.getSymbols();
  }

  getSymbols() {
    let myHeaders: any = new Headers();
    myHeaders.append('X-RapidAPI-Key', environment.RAPIDAPI_KEY);
    myHeaders.append('X-RapidAPI-Host', environment.RAPIDAPI_HOST);
    let requestOptions: any = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders,
      params: {
        from: 'USD',
        to: 'EUR,GBP'
      },
    };


    fetch(
      'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
      requestOptions
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Failed to fetch data');
        }
        return response.text();
      })
      .then((result) => {
        this.currencyData = JSON.parse(result).rates;
        this.currencyCodes = Object.keys(this.currencyData).sort();
        console.log(this.currencyData);
      })
      .catch((err) => console.log(err.message));
  }

  convert(amount: number, from: string, to: string): number {
    let fromConversionCoefficient: number = this.currencyData[from];
    let toConversionCoefficient: number = this.currencyData[to];
    return (toConversionCoefficient / fromConversionCoefficient) * amount;
  }

  onSubmit() {
    if (this.form.valid) {
      let amount: number = parseFloat(this.form.get('amount')?.value);
      let convertFrom: string = this.form.get('from')?.value;
      let convertTo: string = this.form.get('to')?.value;
      let result = this.convert(amount, convertFrom, convertTo);
      result = parseFloat(result.toFixed(2)); // result to 2 decimal places
      this.resultText = `${amount} ${convertFrom} = ${result} ${convertTo}`;
    }
  }
}
