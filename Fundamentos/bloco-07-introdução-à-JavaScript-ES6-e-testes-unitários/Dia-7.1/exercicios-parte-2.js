const fatorial = x => {
    let n = x;
    n == 0 ? n = 1 : n * (x - 1); 
    console.log(n);
}

fatorial(4);