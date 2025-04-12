// DOM Elements
const initialAmountInput = document.getElementById('initialAmount') as HTMLInputElement;
const rateInput = document.getElementById('rate') as HTMLInputElement;
const daysInput = document.getElementById('days') as HTMLInputElement;
const calculateBtn = document.getElementById('calculateBtn') as HTMLButtonElement;
const futureValueSpan = document.getElementById('futureValue') as HTMLSpanElement;
const interestEarnedSpan = document.getElementById('interestEarned') as HTMLSpanElement;

// Investment calculation function
function calculateInvestment(
    initialAmount: number,
    annualRate: number,
    days: number,
): { futureValue: number; interestEarned: number } {
    const annualReturn = initialAmount * (annualRate / 100)
    const dailyRate = annualReturn / 365;
    
    const futureValue = initialAmount + (dailyRate * days)
    const interestEarned = futureValue - initialAmount
    
    return {
        futureValue: parseFloat(futureValue.toFixed(2)),
        interestEarned: parseFloat(interestEarned.toFixed(2))
    };
}

// Event listener for calculate button
calculateBtn.addEventListener('click', () => {
    // Get input values
    const initialAmount = parseFloat(initialAmountInput.value);
    const annualRate = parseFloat(rateInput.value);
    const days = parseFloat(daysInput.value);
    
    // Validate inputs
    if (isNaN(initialAmount) || isNaN(annualRate) || isNaN(days)) {
        alert('Please enter valid numbers in all fields');
        return;
    }
    
    // Calculate and display results
    const result = calculateInvestment(initialAmount, annualRate, days);
    
    futureValueSpan.textContent = `₦${result.futureValue.toLocaleString()}`;
    interestEarnedSpan.textContent = `₦${result.interestEarned.toLocaleString()}`;
});