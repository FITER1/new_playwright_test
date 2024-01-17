export function calculateDifference(firstCurrencyText: string, subtractCurrencyText: string): number {
    // TODO Type safety - catch, log, throw suitable error if input texts are not valid decimal numbers.
    // Parse input strings to float values
    const firstValueAsNumber = parseFloat(firstCurrencyText.replace(/[$,]/g, ''));
    const subtractValueAsNumber = parseFloat(subtractCurrencyText.replace(/[$,]/g, ''));

    // Calculate and return the difference
    return firstValueAsNumber - subtractValueAsNumber;
}
  