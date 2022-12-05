let N=100;
for(let i=2;i<=N;i++)
{

    let isPrime=true;
    if(i==2)
    console.log(i+" is Prime and Palindrome Number")
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
	{
	let rem, temp, final = 0;
		let number =i;
		temp = number;
		while(number>0)
		{
			rem=number%10;
			number=parseInt(number/10);
			final=final*10+rem;
		}
		if(final==temp)
		{
		    console.log(i+" is Prime and Palindrome Number")
		}
	}

    }
}
