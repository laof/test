import { of } from 'rxjs';

class E {
  constructor() {}
}

const list = new Array(5).fill(true).map((o, i) => i);

of(list).subscribe({
  next: res => {
    console.log(res);
  }
});

console.log(new E());
