let N=100;
for(let i=2;i<=N;i++)
{

    let isPrime=true;
    if(i==2)
    console.log(i,"is PrimeNo")
    else {
    let j=2;
    while(j*j<=i)
    {
        if(i%j==0)
        {
            isPrime=false;
            break;
        }
        j++;
    }
    if(isPrime==true)
    console.log(i,"is PrimeNo")

    }
}
